/**
 * Tab icons: no transparent corners (no “white” in browser chrome), square output,
 * full AZ visible. Reads `public/assets/img/favicon.png`, writes:
 * - `public/assets/img/favicon.png` (512, via temp rename)
 * - `app/icon.png` (128), `app/apple-icon.png` (180)
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPath = path.join(root, "public/assets/img/favicon.png");

const { data, info } = await sharp(srcPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width;
const h = info.height;
const ch = info.channels;

let minX = w;
let minY = h;
let maxX = 0;
let maxY = 0;

for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const i = (y * w + x) * ch;
    if (data[i + 3] > 40) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

if (minX > maxX) {
  throw new Error("favicon.png: no visible pixels");
}

const pad = 2;
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(w - 1, maxX + pad);
maxY = Math.min(h - 1, maxY + pad);

const ew = maxX - minX + 1;
const eh = maxY - minY + 1;

const cx = minX + Math.floor(ew / 2);
const cy = minY + Math.floor(eh / 2);
const ci = (cy * w + cx) * ch;
const bg = { r: data[ci], g: data[ci + 1], b: data[ci + 2] };

const size = Math.max(ew, eh);
const padTop = Math.floor((size - eh) / 2);
const padBottom = size - eh - padTop;
const padLeft = Math.floor((size - ew) / 2);
const padRight = size - ew - padLeft;

const square = () =>
  sharp(srcPath)
    .extract({ left: minX, top: minY, width: ew, height: eh })
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: bg
    })
    .flatten({ background: bg });

const out512 = path.join(root, "public/assets/img/favicon.tmp.png");
await square().resize(512, 512).png().toFile(out512);
await fs.rename(out512, path.join(root, "public/assets/img/favicon.png"));

await square().resize(128, 128).png().toFile(path.join(root, "app/icon.png"));
await square().resize(180, 180).png().toFile(path.join(root, "app/apple-icon.png"));

console.log(
  `optimize-favicon: card ${ew}x${eh} → square ${size}, pad LTRB ${padLeft},${padTop},${padRight},${padBottom} → outputs`
);

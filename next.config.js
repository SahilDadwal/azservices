const os = require("node:os");

function getAllowedDevOrigins() {
  return Object.values(os.networkInterfaces())
    .flatMap((entries) => entries ?? [])
    .filter((entry) => entry.family === "IPv4" && !entry.internal)
    .map((entry) => entry.address);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: getAllowedDevOrigins(),
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;

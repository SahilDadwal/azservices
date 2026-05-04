const os = require("node:os");

function getLocalIPv4() {
  const interfaces = os.networkInterfaces();

  for (const entries of Object.values(interfaces)) {
    if (!entries) continue;

    for (const entry of entries) {
      if (entry.family === "IPv4" && !entry.internal) {
        return entry.address;
      }
    }
  }

  return "YOUR_IP";
}

const ip = getLocalIPv4();

console.log("Local:   http://localhost:3000");
console.log(`Network: http://${ip}:3000`);


import fs from "node:fs";

// Delete old dist folder
fs.rmSync("dist", {
    recursive: true,
    force: true
});

// Copy src folder into dist
fs.cpSync("src", "dist", {
    recursive: true
});

console.log("Backend build completed successfully!");

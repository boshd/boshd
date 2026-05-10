import { spawn } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = resolve(rootDir, "node_modules", "next", "dist", "bin", "next");
const resumeScript = resolve(rootDir, "scripts", "resume.mjs");

const resumeWatcher = spawn(process.execPath, [resumeScript, "--watch"], {
  cwd: rootDir,
  stdio: ["ignore", "inherit", "inherit"],
});

const nextDev = spawn(process.execPath, [nextBin, "dev"], {
  cwd: rootDir,
  stdio: "inherit",
});

let isShuttingDown = false;

function shutdown(signal = "SIGTERM") {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;
  resumeWatcher.kill(signal);
  nextDev.kill(signal);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

resumeWatcher.on("exit", (code, signal) => {
  if (!isShuttingDown && code !== 0) {
    console.error(`[dev] resume watcher exited with code ${code ?? signal}`);
  }
});

nextDev.on("exit", (code, signal) => {
  shutdown(signal ?? "SIGTERM");
  process.exit(code ?? 0);
});

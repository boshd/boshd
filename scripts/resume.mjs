import { spawn } from "node:child_process";
import { statSync, watchFile } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const resumeDir = resolve(rootDir, "public");
const resumeTex = resolve(resumeDir, "resume.tex");
const isWatchMode = process.argv.includes("--watch");

let isCompiling = false;
let hasPendingCompile = false;
let lastResumeMtimeMs = statSync(resumeTex).mtimeMs;

function compileResume() {
  return new Promise((resolveCompile) => {
    isCompiling = true;
    console.log("[resume] compiling public/resume.tex");

    let output = "";
    const child = spawn(
      "pdflatex",
      ["-interaction=nonstopmode", "-halt-on-error", "-synctex=1", "resume.tex"],
      {
        cwd: resumeDir,
        stdio: ["ignore", "pipe", "pipe"],
      }
    );

    child.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      output += chunk.toString();
    });

    child.on("close", (code) => {
      isCompiling = false;

      if (code === 0) {
        console.log("[resume] wrote public/resume.pdf");
      } else {
        process.stderr.write(output);
        console.error(`[resume] pdflatex exited with code ${code}`);
      }

      resolveCompile(code ?? 1);
    });

    child.on("error", (error) => {
      isCompiling = false;
      console.error(`[resume] failed to run pdflatex: ${error.message}`);
      resolveCompile(1);
    });
  });
}

async function compileQueued() {
  if (isCompiling) {
    hasPendingCompile = true;
    return;
  }

  const exitCode = await compileResume();

  if (!isWatchMode) {
    process.exit(exitCode);
  }

  if (hasPendingCompile) {
    hasPendingCompile = false;
    await compileQueued();
  }
}

if (!isWatchMode) {
  await compileQueued();
} else {
  await compileQueued();
  console.log("[resume] watching public/resume.tex");

  watchFile(resumeTex, { interval: 500 }, (current) => {
    if (current.mtimeMs !== lastResumeMtimeMs) {
      lastResumeMtimeMs = current.mtimeMs;
      compileQueued();
    }
  });
}

import { readdir, readFile, mkdir, writeFile, mkdtemp, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
async function sourceText(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const texts = await Promise.all(entries.map(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceText(file) : /\.(tsx?|css)$/.test(entry.name) ? readFile(file, "utf8") : "";
  }));
  return texts.join("\n");
}
const text = await sourceText(path.join(root, "src"));
const characters = [...new Set([...text].filter(character => character.codePointAt(0) >= 32))].join("");
const directory = await mkdtemp(path.join(tmpdir(), "portfolio-font-"));
try {
  const textFile = path.join(directory, "characters.txt");
  await writeFile(textFile, characters);
  await mkdir(path.join(root, "src/assets"), { recursive: true });
  const result = spawnSync("uvx", ["--from", "fonttools[woff]==4.61.1", "pyftsubset",
    path.join(root, "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"),
    `--text-file=${textFile}`, "--flavor=woff2", "--layout-features=*", "--obfuscate-names",
    `--output-file=${path.join(root, "src/assets/portfolio-pretendard.woff2")}`], { stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`폰트 생성 실패: ${result.status}`);
  console.log(`현재 소스의 ${characters.length}개 문자로 폰트 생성`);
} finally {
  await rm(directory, { recursive: true });
}

import sharp from "sharp";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const directory = path.join(root, "public/images");
const output = path.join(directory, "responsive");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const variants = {};
const dimensions = {};
for (const file of (await readdir(directory)).sort()) {
  if (!/\.(webp|svg)$/.test(file)) continue;
  const input = await readFile(path.join(directory, file));
  const metadata = await sharp(input).metadata();
  dimensions[`images/${file}`] = [metadata.width, metadata.height];
  if (!file.endsWith(".webp")) continue;
  const hash = createHash("sha256").update(input).update("responsive-v1-q82").digest("hex").slice(0, 12);
  const candidates = [];
  for (const width of [480, 960, metadata.width].filter((w, i, all) => w <= metadata.width && all.indexOf(w) === i)) {
    const name = `${path.parse(file).name}-${hash}-${width}.webp`;
    const buffer = width === metadata.width ? input : await sharp(input).resize({ width }).webp({ quality: 82 }).toBuffer();
    await writeFile(path.join(output, name), buffer);
    candidates.push(`images/responsive/${name} ${width}w`);
  }
  variants[`images/${file}`] = candidates.join(", ");
}
await writeFile(path.join(root, "src/data/imageVariants.ts"), `// 자동 생성: pnpm prepare:images\nexport const imageVariants: Readonly<Record<string, string>> = ${JSON.stringify(variants, null, 2)};\n`);
await writeFile(path.join(root, "src/data/imageSizes.ts"), `// 자동 생성: pnpm prepare:images\nexport const imageSizes: Readonly<Record<string, readonly [number, number]>> = {\n${Object.entries(dimensions).map(([src, size]) => `  ${JSON.stringify(src)}: [${size.join(", ")}],`).join("\n")}\n};\n`);
console.log(`이미지 ${Object.keys(variants).length}개 반응형 후보 생성`);

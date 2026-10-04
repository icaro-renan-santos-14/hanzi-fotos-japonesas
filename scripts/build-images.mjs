import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const sourceDir = 'assets/sources';
const outputDir = 'public/photos/optimized';
const widths = [480, 768, 1280, 1920, 2560, 3840];

await mkdir(outputDir, { recursive: true });
const manifest = {};

for (const file of (await readdir(sourceDir)).filter((name) => name.endsWith('-master.jpg'))) {
  const key = basename(file, '-master.jpg');
  const source = join(sourceDir, file);
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error(`Could not read image: ${file}`);

  const available = widths.filter((target) => target <= width);
  for (const target of available) {
    const resize = () => sharp(source).rotate().resize({ width: target, withoutEnlargement: true });
    await Promise.all([
      resize().avif({ quality: 48, effort: 3 }).toFile(join(outputDir, `${key}-${target}.avif`)),
      resize().webp({ quality: 78, effort: 4 }).toFile(join(outputDir, `${key}-${target}.webp`)),
    ]);
  }

  await sharp(source).rotate().resize({ width: Math.min(2560, width), withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true }).toFile(join(outputDir, `${key}.jpg`));
  const placeholder = await sharp(source).resize({ width: 32 }).blur(4).webp({ quality: 28 }).toBuffer();
  manifest[key] = {
    width,
    height,
    widths: available,
    placeholder: `data:image/webp;base64,${placeholder.toString('base64')}`,
  };
  console.log(`${key}: ${width}×${height}, ${available.join('/')}px`);
}

await writeFile('src/data/imageManifest.json', JSON.stringify(manifest, null, 2) + '\n');

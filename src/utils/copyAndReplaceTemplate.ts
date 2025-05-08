import fs from 'fs';
import path from 'path';

function interpolate(content: string, replacements: Record<string, string>) {
  return Object.entries(replacements).reduce(
    (acc, [key, value]) => acc.replaceAll(`{{${key}}}`, value),
    content
  );
}

export async function copyAndReplaceTemplate(
  srcDir: string,
  destDir: string,
  replacements: Record<string, string>
) {
  fs.mkdirSync(destDir, { recursive: true });

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await copyAndReplaceTemplate(srcPath, destPath, replacements);
    } else {
      const raw = fs.readFileSync(srcPath, 'utf8');
      const interpolated = interpolate(raw, replacements);
      fs.writeFileSync(destPath, interpolated);
    }
  }
}

import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const ignored = new Set(['node_modules', '.next', 'sketch']);
const errors = [];

async function walk(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(jsx?|mjs)$/.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of await walk(root)) {
  const rel = path.relative(root, file);
  const source = await readFile(file, 'utf8');
  if (!rel.startsWith(`scripts${path.sep}`) && /console\.log\(/.test(source)) {
    errors.push(`${rel}: remove console.log debugging output`);
  }
  if (!rel.startsWith(`public${path.sep}`) && /innerHTML\s*=/.test(source)) {
    errors.push(`${rel}: avoid direct innerHTML mutation`);
  }
}

if (errors.length) {
  console.error('Lint checks failed:');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log('Lint checks passed.');

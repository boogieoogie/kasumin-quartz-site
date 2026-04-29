// generate-index.js
import fs from 'fs';
import path from 'path';

const contentDir = './content';
const files = fs.readdirSync(contentDir)
  .filter(f => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
  .sort()
  .reverse(); // 新しい順

const embeds = files.map(f => `![[${f.replace('.md', '')}]]`).join('\n\n');
fs.writeFileSync(`${contentDir}/index.md`, embeds);

console.log(`✅ index.md を生成しました（${files.length}件）`);

import { markdown } from './markdown.ts'
import { cp } from 'node:fs/promises';
import { utils } from './utils.ts';

let test_md = await Bun.file("../src/test.md").text()

let processing = markdown.splitMarkdownFrontmatter(test_md);
processing.content = await markdown.parseMarkdownString(processing.content)

console.log(processing);

await utils.ensureDir("../_dist/assets");
await cp("../src/assets", "../_dist/assets", {recursive: true});

Bun.file("../_dist/index.html").write(processing.content);

import { markdown } from './markdown.ts'
import { utils } from './utils.ts';

let test_md = await Bun.file("../src/test.md").text()

let processing = markdown.splitMarkdownFrontmatter(test_md);
processing.content = await markdown.parseMarkdownString(processing.content)

console.log(processing);

Bun.file("../_dist/index.html").write(processing.content);
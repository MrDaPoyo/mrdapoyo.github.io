import { markdown } from './markdown.ts'

let test_md = await Bun.file("../src/test.md").text()

let processing = markdown.splitMarkdownFrontmatter(test_md);
processing.content = markdown.parseMarkdownString(processing.content)
console.log(processing);
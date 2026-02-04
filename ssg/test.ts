import { markdown } from './markdown.ts'
const string = `---
title: awaa
tags: curiosity, cats
layout: thatswhatshesaid
djsafjlsdjfldf: awaaa
---

# masterpiece
---
test: oni
---

wassup`

let processing = markdown.splitMarkdownFrontmatter(string);
processing.content = markdown.parseMarkdownString(processing.content)
console.log(processing);
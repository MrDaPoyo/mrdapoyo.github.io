# personal-website

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

ssg mkay?

## specs
- root of the content is located at ./src/
    - templates are available per-directory and properties will be passed over to them in the form of `meta.(property)`
    - templates use pug
    - example:
        ```
        src/
        |-- index.pug
        `-- blog_posts/
            |-- index.pug
            |-- 1.md
            |-- story_2.md
            `-- bahhhhhh.md
        _dist/
        |-- index.html
        `-- blog_posts/
            |-- index.html <- (contains a list of blog posts)
            |-- 1.html
            |-- story_2.html
            `-- bahhhhhh.html
        ```
- ssg itself is located at ./ssg/
- output is located at ./_dist/

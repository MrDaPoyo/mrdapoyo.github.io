export type file_metadata = {
    date?: string,
    title?: string,
    tags?: string[],
    category: string,
    layout: string,
}

export type file = {
    content: string,
    metadata: file_metadata
}
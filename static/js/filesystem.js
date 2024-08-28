function createFilesystem() {
    // Define the filesystem structure
    const filesystem = {
        root: {
            directories: {
                dir1: {
                    directories: {},
                    files: {
                        file1: 'File 1 content',
                        file2: 'File 2 content',
                    },
                },
                dir2: {
                    directories: {},
                    files: {
                        file3: 'File 3 content',
                    },
                },
            },
            files: {},
        },
    };
    return filesystem;
}

console.log(createFilesystem());
filesystem = createFilesystem();
function showFileSystem() {
    console.log("yep");
}
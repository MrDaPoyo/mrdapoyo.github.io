import Cookies from 'js-cookie';

// Import the 'js-cookie' library

// Function to create the imaginary filesystem
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

    // Store the filesystem as a JSON string in a cookie
    Cookies.set('filesystem', JSON.stringify(filesystem));
}

// Function to read the imaginary filesystem from the cookie
function readFileSystem() {
    // Get the filesystem JSON string from the cookie
    const filesystemString = Cookies.get('filesystem');

    // Parse the JSON string to get the filesystem object
    const filesystem = JSON.parse(filesystemString);

    // Use the filesystem object as needed
    console.log(filesystem);
}

// Call the createFilesystem function to create the filesystem
createFilesystem();

// Call the readFileSystem function to read the filesystem from the cookie
readFileSystem();
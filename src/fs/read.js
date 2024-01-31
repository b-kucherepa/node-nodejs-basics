import { readFile } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const read = async () => {
    await readFile(PROJ_DIR + '/src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
        console.log(data);
    });
};

await read();
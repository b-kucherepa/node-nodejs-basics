import { readFile } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const read = async () => {
    try {
        const data = await readFile(PROJ_DIR + '/src/fs/files/fileToRead.txt', 'utf8');
        console.log(data);
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await read();
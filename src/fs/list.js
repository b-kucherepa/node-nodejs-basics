import { readdir } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const list = async () => {
    try {
        const files = await readdir(PROJ_DIR + '/src/fs/files');

        files.forEach(file => {
            console.log(file);
        });
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await list();
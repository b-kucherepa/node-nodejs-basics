import { unlink } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const remove = async () => {
    try {
        await unlink(PROJ_DIR + '/src/fs/files/fileToRemove.txt');
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await remove();
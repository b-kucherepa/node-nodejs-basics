import { unlink } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const remove = async () => {
    await unlink(PROJ_DIR + '/src/fs/files/fileToRemove.txt', (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await remove();
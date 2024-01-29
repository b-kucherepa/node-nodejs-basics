import { unlink } from 'fs';
import { FS_DIR, FS_ERROR } from './fsconst';

const remove = async () => {
    await unlink (FS_DIR + '/files/fileToRemove.txt', (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });};

await remove();
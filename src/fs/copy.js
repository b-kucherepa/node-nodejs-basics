import { cp } from 'fs';
import { FS_DIR, FS_ERROR } from './fsconst';

const copy = async () => {
    await cp(FS_DIR + '/files', FS_DIR + '/files_copy', { force: false, overwrite: false, errorOnExist: true, recursive: true }, (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await copy();

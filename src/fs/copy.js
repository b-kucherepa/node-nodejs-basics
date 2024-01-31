import { cp } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const copy = async () => {
    console.log(PROJ_DIR + '/src/fs/files');
    await cp(PROJ_DIR + '/src/fs/files', PROJ_DIR + '/src/fs/files_copy', { force: false, overwrite: false, errorOnExist: true, recursive: true }, (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await copy();

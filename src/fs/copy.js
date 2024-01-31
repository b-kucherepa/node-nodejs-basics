import { cp } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const copy = async () => {
    try {
        await cp(PROJ_DIR + '/src/fs/files', PROJ_DIR + '/src/fs/files_copy', { force: false, overwrite: false, errorOnExist: true, recursive: true })
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await copy();

import { writeFile } from 'fs/promises';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const create = async () => {
    try {
        await writeFile(PROJ_DIR + '/src/fs/files/fresh.txt', 'I am fresh and young!', { flag: 'wx' });
    }
    catch {
        throw new Error(FS_ERROR);
    }
};

await create();
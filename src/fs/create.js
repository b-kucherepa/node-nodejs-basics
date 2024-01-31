import { writeFile } from 'fs';
const PROJ_DIR = process.cwd();
const FS_ERROR = 'FS operation failed';

const create = async () => {
    await writeFile(PROJ_DIR + '/src/fs/files/fresh.txt', 'I am fresh and young!', {flag: 'wx'}, (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await create();
import { writeFile } from 'fs';
import { FS_DIR, FS_ERROR } from './fsconst.js';

const create = async () => {
    await writeFile(FS_DIR + '/files/fresh.txt', 'I am fresh and young!', {flag: 'wx'}, (err) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
    });
};

await create();
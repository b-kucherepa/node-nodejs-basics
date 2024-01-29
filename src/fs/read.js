import { readFile } from 'fs';
import { FS_DIR, FS_ERROR } from './fsconst';

const read = async () => {
    await readFile(FS_DIR + '/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(FS_ERROR);
        }
        console.log(data);
    });
};

await read();
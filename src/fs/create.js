import fs from 'fs';

const create = async () => {
    fs.access('files/fresh.txt', fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFileSync('files/fresh.txt', 'I am fresh and young!');
        }
        else {
            throw new Error('FS operation failed');
        }
    });
}

await create();
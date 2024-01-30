import { readFile } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const fileData = readFile('./files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {});

    const hashData = createHash('sha256');
    hashData.update('fileData');
    console.log(hashData.digest('hex'));
};

await calculateHash();
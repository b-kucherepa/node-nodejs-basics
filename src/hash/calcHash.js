import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
const PROJ_DIR = process.cwd();


const calculateHash = async () => {
    const fileData = readFile(PROJ_DIR + '/src/hash/files/fileToCalculateHashFor.txt', 'utf8');

    const hashData = createHash('sha256');
    hashData.update('fileData');
    console.log(hashData.digest('hex'));
};

await calculateHash();
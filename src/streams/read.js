import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
const PROJ_DIR = process.cwd();

const read = async () => {
    const rs = createReadStream(PROJ_DIR+ '/src/streams/files/fileToRead.txt');
    await pipeline(rs, process.stdout);
};

await read();
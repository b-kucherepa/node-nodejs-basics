import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
    const rs = createReadStream('src/streams/files/fileToRead.txt');
    await pipeline(rs, process.stdout);
};

await read();
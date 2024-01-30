import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

class ReverseTransform extends Transform
{
    _reverseString (s) {
        let chArr = s.split('');
        chArr = chArr.reverse();
        return chArr.join('');
    }

    _transform (chunk, encoding, callback) {
        callback (null, this._reverseString(chunk.toString()) + '\n\n');
    }
}

const transform = async () => {
    const reverseStream = new ReverseTransform;
    await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();
import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n, cache) => {
    let curr = 0;
    let next = 1;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = curr + next;
        curr = temp;
    }
    return curr;
}

const sendResult = () => {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
};

sendResult();
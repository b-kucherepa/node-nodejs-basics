// n should be received from main thread
const nthFibonacci = (n) => {
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
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();
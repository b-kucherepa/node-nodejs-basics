const PREFIX = '--';

const parseArgs = () => {
    let argString = '';
    const argsArray = process.argv.slice(2);
    for (let i = 0; i < argsArray.length-1; i++){
        if (argsArray[i].startsWith(PREFIX)){
            argString+=argsArray[i].slice(2) + ' is ' + argsArray[i + 1] + ', ';
        }
    }

    console.log(argString.slice(0, -2));
};

parseArgs();
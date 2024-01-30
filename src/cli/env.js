const PREFIX = 'RSS_';

const parseEnv = () => {
    let argString = '';
    const argsArray = Object.entries(process.env);
    for (let i = 0; i < argsArray.length; i++){
        if (argsArray[i][0].startsWith(PREFIX)){
            argString+=argsArray[i][0] + '=' + argsArray[i][1] + ', ';
        }
    }

    console.log(argString.slice(0, -2));};

parseEnv();
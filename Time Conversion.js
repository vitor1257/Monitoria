'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    s.split('');
    
    let hora = parseInt(s[0] + s[1]);
    let min = s[3] + s[4];
    let secs = s[6] + s[7];
    let amPm = s[s.length - 2];
    
    if(hora >= 12 && amPm === 'A'){
        hora = hora - 12;
    } else if(hora < 12 && amPm === "P"){
        hora = hora + 12;
    }
    
    if(hora < 10){
        return (`0${hora}:${min}:${secs}`);
    }else {
        return (`${hora}:${min}:${secs}`);
    } 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

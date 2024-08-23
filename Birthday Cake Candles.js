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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    let maxHeight = candles[0]; // Assumes the array is not empty
    let countMaxHeight = 0;

    // Iterate over the candles to find the maximum height and count how many have that height
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];
            countMaxHeight = 1; // Found a new max height, reset count
        } else if (candles[i] === maxHeight) {
            countMaxHeight++; // Found a candle with the current max height, increase count
        }
    }

    return countMaxHeight;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);
    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');
    ws.end();
}

'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // your code goes here
    let totalNegative = 0,
        totalPositive = 0,
        totalZero = 0;
    let i = 0;
    while ( i < arr.length){
        if (arr[i] === 0) totalZero++
        else if (arr[i] > 0) totalPositive++
        else totalNegative++
        i++;
    }
    console.log(Math.abs(totalPositive / arr.length).toFixed(6));
    console.log(Math.abs(totalNegative / arr.length).toFixed(6));
    console.log(Math.abs(totalZero / arr.length).toFixed(6));    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

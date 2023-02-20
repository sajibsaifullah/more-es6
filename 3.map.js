const numbers = [2, 8, 4, 6, 3];


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// function doubleIt(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
// console.log(result);

const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);

const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);

const makeDoubleDirect2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect2);


const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);

const makeSquare = [1, 2, 3, 4, 5].map(x => x * x);
console.log(makeSquare);
/* 
1. get an array
2. for every element of the array do something
3. store the result an array 
4. return the result array

*/


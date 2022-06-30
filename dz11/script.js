function getSum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
        }
    }
    return sum;
}

function main (a1, a2) {
    const a1Sum = getSum(a1);
    const a2Sum = getSum(a2);
    if (a1Sum > a2Sum) {
        return a1;
    } else {
        return a2;
    }
} 

const a = [1,2,3, 'hello',4,5]; //=> summA = 15
const b = [1,2,3, true, 4, undefined, 6]; //=> summB = 16

console.log(main(a,b));
function main (a, b, c) { 
    if (!a) {
        a = 2;
    } 
    if (!b) {
        b = 3;
    }
    const result = sum(a,b);
    if (typeof c === 'function') {
        return c(result);
    }
    return result;
}

function sum (a, b) { 
    return a + b; 
}

function divideByTwo (w) {
    return w / 2; 
}

console.log(main());
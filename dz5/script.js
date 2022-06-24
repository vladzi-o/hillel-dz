// var operandNumber;
// do {
//     operandNumber = +prompt('Enter operand number: 1 < number < 7');
// } while(operandNumber <= 1 || operandNumber >= 7 || isNaN(operandNumber));
// var result = +prompt('Enter operand');
// for(var i = 0; i < operandNumber -1; i++) {
//     var operator;
//     do {
//         operator = prompt('Choose operator (+ - / *)');
//     } while ('+-/*'.indexOf(operator) === -1);
//     if (operator === '+') {
//         result += +prompt('Enter operand');
//     } else if (operator === '-') {
//         result -= +prompt('Enter operand');
//     } else if (operator === '*') {
//         result *= +prompt('Enter operand');
//     } else if (operator === '/') {
//         result /= +prompt('Enter operand');
//     }
// }
// alert(result);

debugger
do {
    operandNumber = +prompt('Enter operand number: 1 < number < 7');
} while(operandNumber <=1 || operandNumber >=7 || isNaN(operandNumber));
result = +prompt('enter operand');
for(i = 1; i < operandNumber; i++) {
    do {
        operator = prompt('Chose operator (+ - / *)');
    } while ('+-/*'.indexOf(operator) === -1);
    if (operator === '+') {
        result += +prompt('enter operand');
    } else if (operator === '-') {
        result -= +prompt('enter operand');
    } else if (operator === '*') {
        result *= +prompt('enter operand');
    } else if (operator === '/') {
        result /= +prompt('enter operand');  
    }         
}
alert(result);

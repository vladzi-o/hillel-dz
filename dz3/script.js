// var input = prompt('number');
// var factorial = 1;
// for (var i = 1; i <= input; i++) {
//     factorial *= i;
// }
// alert(factorial);

var a = +prompt('a');
var b = +prompt('b');
var h = +prompt('h');
if (a > b) {
   alert('error: a > b')
}
var factorialSum = 0;
for (var i = a; i <= b; i += h) { 
    var factorial = 1;
    for (var j = 1; j <= i; j++) {
        factorial *= j;
    }
    factorialSum += factorial;
    factorial = 1;
}
alert(factorialSum);

// попробовал через функцию, все работает, только я не розобрался как :)

// function factorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }

// var a = +prompt('a');
// var b = +prompt('b');
// var h = +prompt('h');
// if (a > b) {
//    alert('error: a > b')
// }
// var factorialSum = 0;
// for (var i = a; i <= b; i += h) {
//     factorialSum += factorial(i);
// }
// alert(factorialSum);
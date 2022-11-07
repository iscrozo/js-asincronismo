//ej 1
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
}

console.log(calc(2, 2, sum));

// ej 2
setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000);

// ej 3
function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');
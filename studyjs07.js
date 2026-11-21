// Function 
// 1. No parameter on return
function showHelloHi() {
    console.log('Hello.....');
    console.log('Hi.....');    
}

// 2. Have parameter on return
function sumNumber(num1, num2) {
    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}

showHelloHi();
showHelloHi();

sumNumber(10, 20);
sumNumber(100, 200);

showHelloHi();

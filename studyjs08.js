// Function 
// 1. No parameter on return 
function getByeBye() {
    console.log('Wow wow wow.....');
    return 'Bye Bye.....';
}

// 2. Have parameter on return
function callAvg4Number(n1, n2, n3, n4) {
    console.log(`Woo Woo Woo.....`);
    return (n1 + n2 + n3 + n4) / 4;
}

console.log(`Sombat ${getByeBye()}`);

let avg = callAvg4Number(10, 20, 30, 40);
console.log(`Average of 4 number is ${avg}`);

console.log(`Somjai ${getByeBye()}`)
console.log(`Somsak ${getByeBye()}`)
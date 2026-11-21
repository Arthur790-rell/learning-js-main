// Control Statements
// Group 1 : Conditional/Selection Statements
// 1.if 
let data = 20;

if (data > 5) {
    console.log('Wow...');
    console.log('------------------------------');
}

// 2.if-else
let data2 = 100
if (data2 < 99) {
    console.log('Hello...');
    console.log('------------------------------');
} else {
    console.log('Hi...');
    console.log('------------------------------');
}

// 3.if-else-if , switch-case
let score = 65;
if (score >= 80) {
    console.log('Grade A');
} else if (score >= 70) {
    console.log('Grade B');
} else if (score >= 60) {
    console.log('Grade C');
} else if (score >= 50) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}

console.log('------------------------------');

// switch-case
let busNo = 84;
switch (busNo) {
    case 84: console.log('ไปสนามหลวง'); break;
    case 81: console.log('ไปบางลำพู'); break;
    case 73: console.log('ไปบางซื่อ'); break;
    case 25: console.log('ไปบางกะปิ'); break;
    default: console.log('ไม่ทราบเส้นทาง'); break;
}
//Operator
console.log(10 + 5); // บวก
console.log(10 - 5); // ลบ
console.log(10 * 5); // คูณ
console.log(10 / 5); // หาร 
console.log(10 % 5); // หารเอาเศษ
console.log(10 ** 5); // ยกกำลัง

//comparison Operator
console.log(10 == 5); //เปรียบเทียบค่าเท่ากันหรือไม่
console.log(10 === 5); //เปรียบเทียบค่าและชนิดข้อมูลเท่ากันหรือไม่
console.log(10 != 5); //เปรียบเทียบค่าไม่เท่ากันหรือไม่
console.log(10 !== 5); //เปรียบเทียบค่าและชนิดข้อมูลไม่เท่ากันหรือไม่
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
console.log('-----------------------------');
console.log("Banana" == "Bangpoo")
console.log("Banana" === "Bangpoo")
console.log("Banana" != "Bangpoo")
console.log("Banana" !== "Bangpoo")
console.log("Banana" > "Bangpoo")
console.log("Banana" < "Bangpoo")
console.log("Banana" >= "Bangpoo")
console.log("Banana" <= "Bangpoo")
console.log("15" == 15) //เปรียบเทียบไม่สนใจชนิดข้อมูล
console.log("15" === 15) //เปรียบเทียบสนใจชนิดข้อมูล
console.log("15" != 15) //เปรียบเทียบไม่สนใจชนิดข้อมูล
console.log("15" !== 15) //เปรียบเทียบสนใจชนิดข้อมูล
console.log('-----------------------------');


//Logical Operator
console.log(! true);
console.log(! false);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-----------------------------');

//Ternary Operator
console.log(25 > 52 ? "Yes" : "No");
console.log('-----------------------------');

//Nullish Coalescing Operator
let xx = 555
let yy = ""
let zz = null
console.log(xx && "Hello")
console.log(yy && "Hi")
console.log(zz && "Hey")
console.log('-----------------------------');

//Increment and Decrement Operator
let number = 10
number++
console.log(number)
++number
console.log(number)
number--
console.log(number)
--number
console.log(number)
console.log('-----------------------------');

//Assignment Operator
let a = 10
console.log(a)
a = a + 15 - 3
console.log(a)

let b = 100
b += 30 //ย่อมาจาก b = b + 30
console.log("B is", b)
let c = 5
c *= b + 10 - 2 //ย่อมาจาก c = c * (b + 10 - 2)
console.log("C is", c)

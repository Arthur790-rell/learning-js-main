// Variable
var scoreMidterm = 80; // เป็นแบบ Global Variable แก้ไข, เปลี่ยนค่าได้
let scoreFinal = 90; // เป็นแบบ Local Variable แก้ไข, เปลี่ยนค่าได้
const scoreTotal = 100; // เป็นแบบ Local Variable ไม่สามารถแก้ไขหรือเปลี่ยนค่าได้

scoreMidterm = 85;
scoreFinal = 95;
// scoreTotal = 110; // จะเกิด Error เพราะเป็น Constant Variable

{
    var x = 10
    let y = 20
    const c = 30
    {
        var x = 100
        let y = 200
        const z = 300
        {
            var m = 1000
            let n = 2000
            const o = 3000
        }
    }
}
// Function (Extra )
// Function แบบ Callback Function : ใช้ได้ทั้ง Anonymous/Arrow Function
function sauIeIe(data1, data2, wow, hi) {
    let result = data1 + data2
    console.log(`Result of ${data1} + ${data2} = ${result}`)

    wow()

    console.log(`Hi....${hi('Somjai' , 'Rukdee')}`)
}

// Call Function
sauIeIe(
    100,
    200,
    function(){
        console.log('Wow wow wow')
    },
    (fname, lname)=>{
        return `${fname} ${lname} `
    }
)
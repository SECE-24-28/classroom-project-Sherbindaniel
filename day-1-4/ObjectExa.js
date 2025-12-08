// let mob={brand:"Samsung",color:"Black",demo:function()
//     {
//         console.log("Hi I'm "+this.sna) //Praveen
//     }

// }

// student.demo()


// console.log(mob)

// mob.price=45000
// console.log(mob)


// console.log(mob.color)
// console.log(mob.["brand"])



// let student={sna:"Praveen",age:19,demo:function()
// {
//     console.log("Hi I'm "+this.sna) //Praveen
// }

// }
// student.demo()

// let student2={sna:"Prabhu",age:19,samp:()=>
// {
//     console.log("Hi I'm "+this.sna) //Undefined
// }

// }
// student2.demo()


let student=[{sna:"Praveen",age:19,fee:true},
            {sna:"Ajith",age:18,fee:false},
            {sna:"Surya",age:17,fee:true}
]

let newStu=student.map((stu)=>
{
    return {na:stu.sna,ma:stu.sma+2}
})

console.log(newStu)
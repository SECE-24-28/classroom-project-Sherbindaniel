let employee=[{ena:"Arun",mob:111},
            {ena:"Ajay",mob:222},
            {ena:"Yokhzz",mob:333},
            {ena:"Tommy",mob:444}


]

let newEmp=employee.filter((emp)=>{
    return emp.mob.includes("A")
})

console.log(newEmp)
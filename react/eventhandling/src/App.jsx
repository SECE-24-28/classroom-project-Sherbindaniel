import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'


function App() {
  // let name=""
  // let demo=(name)=>
  // {
  //   console.log("Hello "+name)
  // }
  // let press=()=>
  // {
  //   let bs=["Stan","MockingBird","Godzilla"]
  //   let num=Math.floor(Math.random()*3)
    
  // }

  // const [count, setCount] = useState(0)

  let frnds=["Carol","Tiger","Raj","Ravi","Rahul"]
  return (
    <>
    {/* <button onClick={()=>demo("Carol")}>Click Me</button> we use anonymous fn to make the fn call only when the button is clicked */}
      {/* <Header />
      <Content /> */}
       {/* <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div> */}
    {frnds.map((val,indx) => {
      return <p key={indx}>{val}</p>
    })}
    </>
  )
}

export default App

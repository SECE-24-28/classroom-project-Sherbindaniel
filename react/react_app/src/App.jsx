import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let city="Chennai"
  let nums=[1,2,3,4,5,6,7,8,9,10]

  return (
    <>
    <p>I'm from {city}</p>
    <p>Lucky Numbers:{nums}</p>
    <p>(1==1)</p>
    {/* <p>(JSON.stringify({name:"Rohit",age:40}))</p> */}
    {/* ternary operator:
    <p>{(1==1)?"true":"false"}</p> */}

    
     
    </>
  )
}

export default App

import { useEffect } from 'react'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [SList,setSList]=useState([])

  useEffect(() => {
    const fetData=async()=>{
    try {
      const res=await api.get("/student")
      setSList(res.data)
      //console.log(res.data)
    }catch(err)
    {
      console.log(err)
    }
  }
    fetData() 

},[])
  return (
    <>
    {
      SList.map((stu)=>
      {
        <p>{stu.id} - {stu.name} - {stu.mark}</p>
      })
    }
      
    </>
  )
}

export default App

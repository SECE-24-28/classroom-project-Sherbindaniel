import React from 'react'
import { createContext, useState } from 'react';
const DataContext = createContext();

export const DataContext = ({children}) => {
    {
        const [name,setName] = useState("Rahul");
        const [count,setCount]=useState(100);
        const demo()=>
        {
            return "India"
        }


    }
  return (
    <DataContext.Provider value={{name,count,setCount,demo}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
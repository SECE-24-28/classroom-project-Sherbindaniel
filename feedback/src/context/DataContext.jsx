import { createContext , useEffect, useState} from "react";
import api from '../api/Post'

const DataContext=createContext()

export const DataProvider=({children})=>
{
    const [posts,setPosts]=useState([])
    const [search,setSearch]=useState("")
    const [searchResults,setSearchResults]=useState([])
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')

    useEffect(()=>{
        const fetchData=async()=>
        {
            try {
              const res=await api.get("/feedback")
              setPosts(res.data)
            } catch (err) {
              console.error('API Error:', err)
            }
        }
        fetchData();
    },[])

    useEffect(()=>{
        const filteredResults = posts.filter((post) =>
          ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResults.reverse())
    },[posts,search])

    const handleSubmit=(e)=>
    {
      e.preventDefault()
      const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
      const datetime=new Date().toLocaleString()
      const newObj={id,title,datetime,body}
      api.post("/feedback",newObj)
      const newList=[...posts,newObj]
      setPosts(newList)
      setTitle('')
      setBody('')
    }

    return (
        <DataContext.Provider value={{posts,searchResults,title,setTitle,body,setBody,search,setSearch,handleSubmit}}>
            {children}
        </DataContext.Provider> 
    )
}




export default DataContext
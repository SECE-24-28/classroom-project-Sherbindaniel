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
        setSearchResults([...filteredResults].reverse())
    },[posts,search])

    const handleSubmit=(e)=>
    {
      e.preventDefault()
      const id=(posts.length)?String(Number(posts[posts.length-1].id)+1):("1")
      const datetime=new Date().toLocaleString()
      const newObj={id,title,datetime,body}
      api.post("/feedback",newObj)
      const newList=[...posts,newObj]
      setPosts(newList)
      setTitle('')
      setBody('')


    }

    const handleDelete=async(id)=>
    {
      try{
        console.log('Deleting post with ID:', id)
        const response = await api.delete(`/feedback/${id}`)
        console.log('Delete response:', response)
        const newList=posts.filter((post)=>String(post.id) !== String(id))
        setPosts(newList)
        alert("Post deleted successfully!")
      }
      catch(err)
      {
        console.error('Delete error:', err)
        console.error('Error details:', err.response?.data || err.message)
        alert(`Failed to delete post: ${err.response?.status || err.message}`)
      }
    }

    const handleUpdate=async(id, updatedPost)=>
    {
      try{
        console.log('Updating post with ID:', id, 'Data:', updatedPost)
        const response = await api.put(`/feedback/${id}`, updatedPost)
        console.log('Update response:', response)
        const newList=posts.map((post)=>String(post.id) === String(id) ? updatedPost : post)
        setPosts(newList)
        alert("Post updated successfully!")
      }
      catch(err)
      {
        console.error('Update error:', err)
        console.error('Error details:', err.response?.data || err.message)
        alert(`Failed to update post: ${err.response?.status || err.message}`)
      }
    }

    return (
        <DataContext.Provider value={{posts,searchResults,title,setTitle,body,setBody,search,setSearch,handleSubmit,handleDelete,handleUpdate}}>
            {children}
        </DataContext.Provider> 
    )
}




export default DataContext
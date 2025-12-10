import React from 'react'
import { Route, Routes,Link, Outlet} from 'react-router-dom'
import Post from './Post'
import NewPost from './NewPost'
const Postpage = () => {
  return (
    <>
    <ol>
        <li><Link to="1">Post 1</Link></li>
        <li><Link to="newpost">Post 2</Link></li>
        <li><Link to="/gallery">Post 3</Link></li>
        </ol>
         <Outlet/>  
    </> 
 
  )
}

export default Postpage
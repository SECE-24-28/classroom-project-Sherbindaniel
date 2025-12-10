import { useState } from 'react'
import {Route,Routes,Link} from 'react-router-dom'
import './App.css'
import Gallery from './Gallery'
import Home from './Home'
import Postpage from './Postpage' 
import Post from './Post'
import NewPost from './NewPost'

function App() {

  return (
    <>
    <ul>
      <li> <Link to="/h">Home</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/pos">Postpage</Link></li>
    </ul>
    <Routes>
    <Route path="/h" element={<Home/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/pos" element={<Postpage/>}>
      <Route path=":id" element={<Post/>}/>
      <Route path="newpost" element={<NewPost/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App
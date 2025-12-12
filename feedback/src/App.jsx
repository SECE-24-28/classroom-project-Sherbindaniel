import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Post'
import { Home } from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { EditPost } from './EditPost'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

function AppContent() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
        try {
          const res = await api.get("/feedback")
          console.log('API Response:', res.data)
          setPosts(res.data)
        } catch (err) {
          console.error('API Error:', err)
        }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      post.body.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResults([...filteredResults].reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = (posts.length) ? (Number(posts[posts.length-1].id) + 1) : (1)
    const datetime = new Date().toLocaleString()
    const newObj = {id, title, datetime, body}
    api.post("/feedback", newObj)
    const newList = [...posts, newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
    navigate('/')
  }

  return (
    <DataProvider>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Post</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Search search={search} setSearch={setSearch} />
              <Home posts={searchResults.length ? searchResults : posts} />
            </>
          } />
          <Route path="/add" element={
            <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} />
          } />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </DataProvider>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App    
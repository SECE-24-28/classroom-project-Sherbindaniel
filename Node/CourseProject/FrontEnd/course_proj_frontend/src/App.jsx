import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import e from 'cors'
import {getCourses,addCourse,updateCourse,deleteCourse} from './api/CourseApi.jsx'

function App() {
  const [courses,setCourses] = useState([])
  const [title,setTitle]=useState("")
  const [duration,setDuration]=useState("")
  const [editId,setEditId] = useState("")
  // const [delete,]

  const fetchCourse=async()=>
  {
    try {
      console.log('Fetching courses from: http://localhost:4000/api/courses')
      const res=await getCourses()
      console.log('Courses fetched:', res.data)
      setCourses(res.data)
    } catch (error) {
      console.error('Error fetching courses:', error)
      if (error.response?.status === 404) {
        alert('Backend server not found. Make sure your Node.js server is running on port 4000')
      }
    }
  }

  useEffect(()=>
  {
    fetchCourse()
  },[]
)

const handleSubmit=async(e)=>
{
  e.preventDefault()
  if (!title || !duration) {
    alert('Please fill in both title and duration')
    return
  }
  try {
    console.log('Adding course:', {title,duration})
    const response = await addCourse({title,duration})
    console.log('Course added:', response)
    setTitle("")
    setDuration("")
    fetchCourse()
  } catch (error) {
    console.error('Error adding course:', error)
    alert('Error adding course. Check console for details.')
  }
}

const handleDelete=async(id)=>
{
  await deleteCourse(id)
  fetchCourse()
  alert("Deletion Success...")
} 

const handeEdit=(course)=>
{
  setTitle(course.title)
  setDuration(course.duration)
  setEditId(course._id)
}

const update=async()=>
{
  await updateCourse(editId,{title,duration})
  setTitle("")
  setDuration("")
  setEditId("")
  fetchCourse()
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value ={title} placeholder='Enter course title' onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={duration} placeholder='Enter course duration' onChange={(e)=>setDuration(e.target.value)}/>
        <button type="submit">Add Course</button>
        <button onClick={update} type='button'>Update Course</button>
      </form>

      <ul>
        {
          courses.map((course)=>
            <li key={course._id}>
              {course.title} - {course.duration}
              <button onClick={()=>handeEdit(course)}>Click Me</button>
              <button onClick={()=>handleDelete(course._id)}>Delete</button>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App

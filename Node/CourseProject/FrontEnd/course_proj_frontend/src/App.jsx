import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [courses,setCourses] = useState([])
  const [title,setTitle]=useState("")
  const [duration,setDuration]=useState("")

  const fetchCourse=async()=>
  {
    const res=await getCourses()
    setCourses(res.data)
  }

  useEffect(()=>
  {
    fetchCourse()
  },[]
)

  return (
    <>
      <form action="" >
        <input type="text" />
        <input type="text" />
        <button>Add Course</button>
      </form>

      <ul>
        {
          courses.map(course=>
            <li>
              {course.title} - {course.duration}
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App

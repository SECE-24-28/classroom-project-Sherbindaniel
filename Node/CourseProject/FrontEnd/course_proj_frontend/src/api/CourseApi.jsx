import axios from 'axios'
const api=axios.create({baseURL:"http://localhost:4000/api"})
const getCourses=()=>api.get("/courses")
const addCourse=(course)=>api.post("/courses",course)
const updateCourse=(id,course)=>api.put(`/courses/${id}`,course)
const deleteCourse=(id)=>api.delete(`/courses/${id}`)

export {getCourses,addCourse,updateCourse,deleteCourse}

import axios from 'axios'
const api=axios.create({baseURL:"http://localhost:4000/api"})
const getCourses=()=>api.get("/courses")
const addCourses=(course)=>api.post("/courses",course)
const updateCourses=(id,course)=>api.put(`/courses/${id}`,course)
const deleteCourses=()=>api.delete(`/courses/${id}`)
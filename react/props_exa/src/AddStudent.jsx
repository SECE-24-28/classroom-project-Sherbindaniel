import React from 'react'

const AddStudent = ({newstu,setNewStu,handleSubmit}) => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='New Student'
                               value={newstu}
                               onChange={(e)=>setNewStu(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddStudent
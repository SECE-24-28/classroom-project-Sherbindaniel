import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export const AddPost = () => {
  const {title,setTitle,body,setBody,handleSubmit}=useContext(DataContext)
  return (
    <div style={{
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
        <h2 style={{color: '#495057', marginBottom: '20px'}}>Add New Post</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <input 
              type="text" 
              placeholder='Title' 
              value={title} 
              onChange={(e)=>setTitle(e.target.value)}
              style={{
                padding: '12px',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                fontSize: '16px',
                backgroundColor: '#fff'
              }}
            />
            <textarea 
              placeholder='Body' 
              value={body} 
              onChange={(e)=>setBody(e.target.value)}
              rows="4"
              style={{
                padding: '12px',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                fontSize: '16px',
                backgroundColor: '#fff',
                resize: 'vertical'
              }}
            ></textarea>
            <button 
              type='submit'
              style={{
                padding: '12px 24px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              Save Post
            </button>
        </form>
    </div>
  )
}

export default AddPost
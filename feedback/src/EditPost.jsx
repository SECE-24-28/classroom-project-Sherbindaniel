import React, { useContext, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import DataContext from './context/DataContext'


export const EditPost = () => {
    
       const{posts,handleDelete,handleUpdate}= useContext(DataContext)
       const{id}= useParams()
       const navigate = useNavigate()
       
       const post=posts.find((p)=>String(p.id) === String(id))
       const [editTitle, setEditTitle] = useState(post?.title || '')
       const [editBody, setEditBody] = useState(post?.body || '')

       const handleDeletePost = async () => {
         console.log('Delete button clicked for ID:', id)
         try {
           await handleDelete(id)
           navigate('/')
         } catch (err) {
           console.error('Delete failed in component:', err)
         }
       }

       const handleUpdatePost = async () => {
         console.log('Update button clicked for ID:', id)
         const updatedPost = {
           id: post.id,
           title: editTitle,
           body: editBody,
           datetime: post.datetime
         }
         console.log('Updated post data:', updatedPost)
         try {
           await handleUpdate(id, updatedPost)
           navigate('/')
         } catch (err) {
           console.error('Update failed in component:', err)
         }
       }
       if(!post)
        return (    
            <div>
                <h2>Post Not Found</h2>
            </div>
        )
    

  return (
    <div className="add-post-container">
        <h1 className="add-post-title">Edit Post</h1>
        <div className="add-post-form">
            <input 
              type="text" 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)}
              className="form-input"
              placeholder="Edit title..."
            />
            <textarea 
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              className="form-textarea"
              rows="4"
              placeholder="Edit content..."
            ></textarea>
            <div style={{display: 'flex', gap: '10px'}}>
              <button 
                onClick={handleUpdatePost}
                className="submit-button"
                style={{backgroundColor: '#28a745'}}
              >
                Update Post
              </button>
              <button 
                onClick={handleDeletePost}
                className="submit-button"
                style={{backgroundColor: '#dc3545'}}
              >
                Delete Post
              </button>
            </div>
        </div>
    </div>
  )
}

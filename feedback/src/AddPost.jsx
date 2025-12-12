import React from 'react'

export const AddPost = ({title = '', setTitle = () => {}, body = '', setBody = () => {}, handleSubmit = () => {}}) => {
  return (
    <div className="add-post-container">
        <h2 className="add-post-title">Add New Post</h2>
        <form onSubmit={handleSubmit} className="add-post-form">
            <input 
              type="text" 
              placeholder='Enter post title here...' 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
            <textarea 
              placeholder='Write your feedback content here...' 
              value={body} 
              onChange={(e) => setBody(e.target.value)}
              rows="4"
              className="form-textarea"
            ></textarea>
            <button type='submit' className="submit-button">Save Post</button>
        </form>
    </div>
  )
}

export default AddPost
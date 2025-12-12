import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({posts = []}) => {

  return (
    <div className="home-container">
        {
            posts.map((post) => (
                <div key={post.id} className="post-item">
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-datetime">{post.datetime}</p>
                    <p className="post-body">{post.body}</p>
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                </div>
            ))
        }
    </div>
  )
}

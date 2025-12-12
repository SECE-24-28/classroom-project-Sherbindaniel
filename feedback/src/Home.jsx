import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export const Home = () => {
  const { searchResults, posts } = useContext(DataContext)
  const displayPosts = searchResults.length ? searchResults : posts

  return (
    <div>
        {
            displayPosts.map((post)=>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

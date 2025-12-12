import React from 'react'

export const Search = ({search = '', setSearch = () => {}}) => {
  return (
    <div className="search-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Type to search posts by title or content..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </form>
    </div>
  )
}

export default Search
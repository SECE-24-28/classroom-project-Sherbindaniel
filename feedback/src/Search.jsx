import React, { useContext } from 'react'
import DataContext from './context/DataContext'

export const Search = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <div>
    <input type="text" value={search} placeholder='Search Posts' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search
import React from 'react'
import { useGlobalContext } from '../context/context';

function Search() {
  const {query, setQuery, isError} = useGlobalContext()
  return (
    <div>
      <h1>Search Here</h1>
      <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" 
      placeholder="Enter Movie Name"
      value={query}
      onChange={(e)=> setQuery(e.target.value)} />

      </form>
      <div>
        <p>{isError.show && isError.msg }</p>
        
      </div>
      
    </div>
  )
}

export default Search;

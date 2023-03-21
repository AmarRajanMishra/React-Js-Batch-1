import React from 'react'
import { useGlobalContext } from '../context/context';

function Search() {
    const {query, setQuery, isError} = useGlobalContext()
  return (
    <>
    <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type='text' placeholder='Movie name'
          value={query}
          onChange ={(e) => {setQuery(e.target.value)}}
          />
            {/* <input type='text'
            placeholder='Enter Movie Name'
            value={query}
            onChange ={(e) => {setQuery(e.target.value)}}
            
            /> */}
        </form>
        <div>
          {isError.show && isError.msg}
        </div>
    </div>
      
    </>
  )
}

export default Search;


// {
//   var a = 10, b = 20, c = 5;
//   if(a> b && a> c){

//   }
  
// }

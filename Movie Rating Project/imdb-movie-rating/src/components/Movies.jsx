import React from 'react'
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import Search from './Search';

function Movies() {
    const {movie, isLoading} = useGlobalContext();
    if(isLoading){
      return(
        <div>
          <h1>Loading......</h1>
        </div>
      )
    }
  return (
    <div>
      <h1>My Movies</h1>
      <div>
        <Search />
      </div>
      <div>
        {
            movie.map((currMovie)=>{
                return <Link to={`movie/${currMovie.imdbID}`} key={currMovie.imdbID}>
                <h1>{currMovie.Title}</h1>
                </Link>
                

            })

        }
      </div>
    </div>
  )
}

export default Movies;

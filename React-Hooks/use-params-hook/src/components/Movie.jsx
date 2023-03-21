import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';


function Movie() {
    const {movie, isLoading} = useGlobalContext()
    if(isLoading){
        return <h1>Loading......</h1>
    }
    // if(isLoading){
    //     return <h1>Loading.......</h1>
    // }
  return (
    <div>
        <h1>My Movies</h1>
        <div>
            {
                movie.map((currMovies)=>{
                    const {imdbID, Title, Poster} = currMovies
                    return <Link to={`movie/${imdbID}`} key={imdbID}> 
                        <h1>{Title}</h1>
                        <img src={Poster}/>
                    </Link>

                })
            }
        </div>
      
    </div>
  )
}

export default Movie;

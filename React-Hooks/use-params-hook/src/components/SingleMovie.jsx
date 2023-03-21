import React,{useState, useEffect, } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../context/context';


function SingleMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    

    const getMovies = async (url)=>{
      setIsLoading(true)
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
          setMovie(data);
          setIsLoading(false)
      }catch(err){
        console.log(err)
        setIsLoading(false)
      }  
    }
    useEffect(()=>{
     var timerOut = setTimeout(()=>{
      getMovies(`${API_URL}&i=${id}`);

     }, 800)
     return () => clearTimeout(timerOut)
    }, [id])
    if(isLoading){
      return <h1>Loading.....</h1>
    }
  return (
    <div>
      <h1>{id}</h1>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} />
      <p>{movie.imdbRating}/10</p>
      <h3>Actor Name : {movie.Actors}</h3>
      {/* <h3> Ratigs : {movie.Ratings[0].Value}</h3> */}
      <div>
        <Link to='/'><button>Go Back</button></Link>
      </div>
    </div>
  )
}

export default SingleMovie;


// http://www.omdbapi.com/?apikey=25bdd068&s=titanic


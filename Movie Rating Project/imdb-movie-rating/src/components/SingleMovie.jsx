import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { API_URL } from '../context/context';

function SingleMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState('')
    const [isLoading, setIsloading] = useState(true)

    const getMovies = async (url)=>{
      setIsloading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === "True"){
                setIsloading(false)
                setMovie(data)
            }
        } catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`)

        }, 1000)
        return () => clearTimeout(timerOut);
        
    }, [id])
    if(isLoading){
      return(
        <div>
          <h1>Loading......</h1>
        </div>
      )
    }

  return (
    <div>
        <h1>My Movie id is {id}</h1>
        <img src={movie.Poster} />
      
    </div>
  )
}

export default SingleMovie;

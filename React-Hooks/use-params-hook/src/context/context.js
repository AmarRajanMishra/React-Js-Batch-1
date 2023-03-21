import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'


const MyMovieContext = createContext()

export const API_URL = 'http://www.omdbapi.com/?apikey=25bdd068'


const MyMovieDataProvider = ({children}) => {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('titanic')
    const [ isError, setIsError ] = useState({show : "false", msg : ""})

    const getMovies = async (url)=>{
      setIsLoading(true)
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        if(data.Response === "True"){
          
          setMovie(data.Search);
          setIsLoading(false)
          setIsError({
            show : false,
            msg : ""
          })
        }else{
          setIsError({
            show : true,
            msg : data.Error
          })
          setIsLoading(false)
        }
      }catch(err){
        console.log(err)
      }  
    }
    useEffect(()=>{
     var timerOut = setTimeout(()=>{
      getMovies(`${API_URL}&s=${query}`);  //url&s=titanic

     }, 800)
     return () => clearTimeout(timerOut)
    }, [query])
  return (
    <>
    <MyMovieContext.Provider value={{movie, isLoading, query, setQuery, isError, setIsError}}>
        {children}

    </MyMovieContext.Provider>

      
    </>
  )
}



const useGlobalContext = () => {
    
  return ( useContext(MyMovieContext))
}




export { MyMovieContext, MyMovieDataProvider, useGlobalContext }

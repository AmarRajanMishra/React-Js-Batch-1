import { createContext, useContext, useEffect, useState } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=36f99b5`;

const MovieContext = createContext();
// We need to create a provider
const MovieDataProvider = ({children})=>{
    const [movie, setMovie] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState({show : 'false', msg: ''})
    const [ query, setQuery] = useState('titanic')
    

    const getMovies = async (url)=>{
        setIsloading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === "True"){
                setIsloading(false)
                setMovie(data.Search)
                setIsError({
                    show: false,
                    msg:"",
                });
            }else{
                setIsError({
                    show: true,
                    msg:data.Error,
                });
            }
        } catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        let timerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`)

        }, 500)
        return () => clearTimeout(timerOut);
        
    }, [query])
    
    return <MovieContext.Provider value={{movie, isLoading, isError, query, setQuery}}>
        {children}
    </MovieContext.Provider>
};

const useGlobalContext = ()=>{
    return useContext(MovieContext);
}

export {
    MovieContext, MovieDataProvider, useGlobalContext
}
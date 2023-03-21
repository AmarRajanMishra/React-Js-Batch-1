import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API from './MyAxios'


function UsingAxios() {
    const [myData, setMyData] = useState([])
    // const myFun = () => console.log("Arrow Fun")
    // Using Fetch() method
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setMyData(data)

    //     })
    // }, [])


    // Use Axios using Promises
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => setMyData(res.data))
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }, [])



    // Using Async await
    // const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    // const getData = async (url) =>{
    //     try{
    //     const res = await axios.get(url)
    //     const data = res.data
    //     console.log(data)
    //     setMyData(data)

    //     }catch{
    //         console.log()
    //     }
        
    // }

    // useEffect(()=>{
    //     getData(API_URL)
    // }, [])
    

    // Using External axios and baseURL
    
    const getData = async (nextUrl) =>{
        try{
        const res = await API.get(nextUrl)
        const data = res.data
        console.log(data)
        setMyData(data)

        }catch{
            console.log()
        }
        

    }
    useEffect(()=>{
        getData('/posts')
        // getData()
    }, [])


  return (
    <div>
        <h1>UsingAxios</h1>
        <div>
            
            {
                myData.map((data) => {
                    return(
                        <div key={data.id}>
                            <h1>{data.title.slice(0, 30)}</h1>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default UsingAxios;

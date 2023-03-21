import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import ExternalAxios from './ExternalAxios'
function MyAxiosData() {
    const [myData, setMyData] = useState([])

    // Using Promises
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=>setMyData(res.data))


    // }, [])
    const getData = async () => {
        const res = await ExternalAxios.get('/posts');
        setMyData(res.data)
    }
    // Using Async Await
    useEffect(()=>{
        getData()
    }, [])

  return (
    <div>
        {
            myData.map((post)=>{
                const {body, title, id} = post
                return (
                    <div key={id}>
                        <h1>{title}</h1>

                    </div>
                )
            })
        }
      
    </div>
  )
}

export default MyAxiosData;

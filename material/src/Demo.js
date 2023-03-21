import React, { useEffect, useState } from 'react'

function Demo() {
    const [count, setCount] = useState(5);
    const incerment =()=>{
        setCount(count + 10);
    }
    const decerment =() =>{
        setCount(count - 1);
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={incerment}>Incerment</button>
    <button onClick={decerment}>Decerment</button>
    </>
  )
}

export default Demo
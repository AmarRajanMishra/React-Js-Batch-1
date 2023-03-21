import React, { useEffect, useState } from 'react'

const UseEffectLifeCycle = () => {
  const [num, setNum] = useState(0);
  const increNum = () =>{
    setNum(num +1)
  }
  // useEffect(()=>{
  //   console.log("ComponentDidMount : component mounting")
  // })
  // useEffect(()=>{
  //   console.log("ComponentDidUpdate : component Updating")
  // },[num])
  useEffect(()=>{
    console.log("ComponentDidUpdate : component Updating")
    return ()=>{
      console.log("ComponentWillUnmount : component will removed")
    }
    
  },[setNum])

  return (
    <>
      <h1>{num}</h1>
      <button onClick={increNum}>Click Me</button>
    </>
  )
}

export default UseEffectLifeCycle;

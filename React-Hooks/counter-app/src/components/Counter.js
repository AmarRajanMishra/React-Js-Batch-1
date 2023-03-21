

import React, { useState } from 'react'

function Counter() {
    const [num, setNum] = useState(0);
    const increFun = () => {
        setNum(num+1);
    }
    const decreFun = () => {
        if(num > 0){
        setNum(num-1);
        }
    }
    const resFun = () => {
        setNum(0);
    }
  return (
    <>
      <h1>Counter Application</h1>
      <h1>{num}</h1>
      <button onClick={increFun} >Increment</button>
      <button onClick={decreFun} >Decrement</button>
      <button onClick={resFun}>Reset</button>
    </>
  )
}

export default Counter;

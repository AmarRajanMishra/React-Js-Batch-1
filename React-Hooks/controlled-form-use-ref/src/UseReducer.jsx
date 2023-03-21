import React, { useReducer } from 'react'
import reducer from './reducer';


const initialValue = 0;

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
        UseReducer
        <h1>{count}</h1>
        <button onClick={()=> dispatch({type: "INC"})}>Increment</button>
        <button onClick={()=> dispatch({type: "DEC"})}>Decrement</button>
        
        </div>
    
  )
}

export default UseReducer;
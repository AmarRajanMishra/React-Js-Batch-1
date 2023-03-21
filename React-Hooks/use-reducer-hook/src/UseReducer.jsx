import React, { useReducer } from 'react'
import reducer from './reducer/reducer';

const initialState = 0;


function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>Decrement</button>

    </div>
  )
}

export default UseReducer;
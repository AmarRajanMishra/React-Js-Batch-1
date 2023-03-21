import React, { useReducer } from 'react'

const initialValue = 5;

const reducer = (state, action)=>{
    console.log(state, action)
    console.log(action.name)

    if(action.type === "INCREMENT"){
        return state+1;
    }
    if(action.type === "DECREMENT"){
        return state-1;
    }
    return state;
}

function UseReducerHook() {

    const [state, dispatch]= useReducer(reducer, initialValue)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type : "INCREMENT"})}>Increment</button>
        <button onClick={()=> dispatch({type : "DECREMENT"})}>Decrement</button>
        
    </div>
  )
}

export default UseReducerHook;
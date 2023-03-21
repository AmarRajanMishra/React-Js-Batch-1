import React, {useState} from 'react'

function UseState() {
    let initialValue = 0;
    const [state, setState] = useState(initialValue)  // initial value = 0+1
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=> setState(state+1)}>Increment</button>
        <button onClick={() => setState(state-1)}>Decrement</button>

    </div>
  )
}

export default UseState;
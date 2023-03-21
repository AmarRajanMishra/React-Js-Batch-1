import React from 'react'
import HocComp from './HocComp';

function CompC(props) {
    const {color, count, increment, name} = props
  return (
    <div  style={{backgroundColor : color}}>
        <h1>Component C</h1>
        <h2>Value {count}</h2>
        <h3>Name is {name}</h3>
        <button onDoubleClick={increment} >Click Me</button>
      
    </div>
  )
}

export default HocComp(CompC)

import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'


import HocComp from './HocComp';

function CompA(props) {
  const {color, count, increment, name} = props
  let location = useLocation()
  return (
    <>
    <div style={{backgroundColor : color}}>

    <h1 >Component A {count}</h1>
    <h3>Name is {name}</h3>
    <button onClick={increment}>Click Me</button>
    </div>
    
      
    </>
  )
}

export default HocComp(CompA)

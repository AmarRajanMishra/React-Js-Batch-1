import React, { useContext } from 'react'
import Comp2 from './Comp2';
import MyNewContext from '../context/MyNewContext';

function Comp1() {
    const a = useContext(MyNewContext)
  return (
    <div>
        <h1>Comp1</h1>
        <h1>My Gender is {a.Gender}</h1>
        
        <Comp2/>
    </div>
  )
}

export default Comp1;

// Context Api
// context creater
// Provider
// Consumer

// useContext
// context
// Provider
// useContext
import React, { useEffect, useState, useLayoutEffect } from 'react'
import HocComp from './HocComp';

function CompB(props) {
  const {color, count, increment, name} = props
  const [counter, setcounter] = useState(0)
  // useEffect(()=>{
  //   // Runs on every render
  // })
  // useEffect(()=>{
  //   // Runs Only Once

  // }, [])
  // useEffect(()=>{
  //   // Render dependncy is updated

  // }, [color])
  // useEffect(() => {
  //   console.log('First')
  //   setcounter(Math.random()*100)
  // }, [])
  // useLayoutEffect(() => {
  //   console.log('Second')
  // }, [])
  // useEffect(() => {
  //   console.log('Third')
  // }, [])

  // useLayoutEffect(() => {
  //   console.log('First')
  // }, [])
  // useLayoutEffect(() => {
  //   console.log('Second')
  // }, [])
  // useLayoutEffect(() => {
  //   console.log('Third')
  // }, [])
  
    
  return (
    <>
    <div  style={{backgroundColor : color}}>
      <h1>Component A {count}</h1>
      <h3>Name is {counter}</h3>
      <button onMouseOver={increment}>Hover Me</button>
    </div>
    </>
  )
}

export default HocComp(CompB)

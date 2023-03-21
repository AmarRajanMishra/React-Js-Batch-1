import React, { useEffect, useState } from 'react'

function UseEffectsOne() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    // console.log(`Chats : ${count}`)
    // useEffect have auto render 
    if(count >= 1){
      document.title = `Chats : (${count})`
    }
    
  })
  
    // const [count, setCount] = useState(0);
    // useEffect(()=>{
    //     // console.log('useEffect')
    //     document.title = `Chats (${count})`
    // });
    // console.log('Hello OutSide')
  return (
    <>
    <h1>useEffect Hooks</h1>
    <h1>{count}</h1>
    <button  onClick={()=> setCount(count + 1)}>Click Me</button>
    <input type="color" />
      
    </>
  )
}

export default UseEffectsOne;

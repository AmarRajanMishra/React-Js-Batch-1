import React, { useEffect, useState } from 'react'

function UseEffectLifeCycle() {
    const [num, setNum] = useState(0);
    const increMent = () => {
        setNum(num + 1)
    }
    // useEffect(()=>{
    //     console.log('ComponentDidMount')
    // })
    useEffect(()=>{
        console.log('ComponentDidupdate')
        return ()=>{
            console.log('removed')
        }

    }, [num])
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={increMent}>Click Me</button>
      
    </div>
  )
}

export default UseEffectLifeCycle;

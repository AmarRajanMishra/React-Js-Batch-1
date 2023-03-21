import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)
    const incre = () => {
        setcounterOne(counterOne + 1)
    }
    const decre = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(()=>{
        console.log('....')
        let i = 0;
        while(i<2000000000) i++;
       return counterOne%2===0

    }, [counterOne]) 
    // const isEven = () =>{
    //     let i = 0;
    //     while(i<2000000000) i++;
    //    return counterOne%2===0
    // }
  return (
    <div>UseMemo
        
        <button onClick={()=>incre()}>CounterOne - {counterOne}</button>
        <h1>{isEven?"Even":"Odd"}</h1>
        <button onClick={()=>decre()}>CounterTwo - {counterTwo}</button>
    </div>
  )
}

export default UseMemo
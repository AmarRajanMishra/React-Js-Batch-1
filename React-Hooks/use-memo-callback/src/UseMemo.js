import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    const incrementOne = ()=>{
        setCounterOne(counterOne+1)

    }
    const incrementTwo = ()=>{
        setCounterTwo(counterTwo+1)

    }
    const isEven = () => {
        // console.warn('clicked....')
        // let i = 0;
        // while(i < 20000000000) i++;
        return counterOne%2===0
    }

    // const isEven = useMemo(()=>{
    //     console.warn('clicked....')
    //     let i = 0;
    //     // while(i < 4000000000000000) i++;
    //     return counterOne%2===0

    // }, [counterOne])
    
  return (
    <div>
        <h1>UseMemo</h1>
        <button onClick={incrementOne}>Counter One : {counterOne}</button>
        <span>{isEven()? 'Even':'Odd'}</span>
        <button onClick={incrementTwo}>Counter One : {counterTwo}</button>

    </div>
  )
}

export default UseMemo;
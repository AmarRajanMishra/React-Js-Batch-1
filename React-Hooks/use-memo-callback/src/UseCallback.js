import React,{useCallback, useState} from 'react'
import Child from './Child';

function UseCallback() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);
    const incrementOne = ()=>{
        setCounterOne(counterOne+1)

    }
    const fun = useCallback(() => {
        console.log('Hello amar')
    }, counterTwo)
    // const fun = useCallback(() => {
    //     console.log('Hello amar')
    // },counterTwo)
  return (
    <div>
       <h1>UseCallback</h1> 
       <Child counterTwo = {counterTwo} fun = {fun} />
       {/* <Child /> */}
       <button onClick={incrementOne}>Counter One : {counterOne}</button>
    </div>
  )
}

export default UseCallback;
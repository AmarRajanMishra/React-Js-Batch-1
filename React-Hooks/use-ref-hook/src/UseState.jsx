import React, { useEffect, useRef, useState } from 'react'

function UseState() {
    // const [count, setCount] = useState('')
    const [data, setData] = useState('')
    const count =  useRef(0)








    // const [data, setData] = useState("");
    // const [count, setCount] = useState(0);
    // const count = useRef(0)
    useEffect(()=>{
        // setCount(count+1)
        // setCount(count+1)

        count.current = count.current+1
        // count.current = count.current + 1;
    })
  return (
    <div>
        UseState
        <div>
            <input type="text"
            value={data}
            onChange = {(e)=> setData(e.target.value)}
            // onChange = {(e) => setCount(e.target.value)}
            // value={data}
            // onChange = {(e)=> setData(e.target.value)}
            />
            <div>
                <h1>The number of Render : 
                    {count.current}
                    {/* {count.current} */}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default UseState;
import React, { useContext } from 'react'
import MyNewContext from '../context/MyNewContext';

function Comp3() {
    const data = useContext(MyNewContext)
  return (
    <div>
        <h1>Comp3</h1>
        <h1>My Name is {data.Name}  and my Age is{data.Age}</h1>
        

    </div>
  )
}

export default Comp3;
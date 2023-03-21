import React, { useState } from 'react'

function HocComp(WrapperComponent) {
  function HighOrderComp(props){
    const [count, setcount] = useState(0)
    const increment = () => {
      setcount(count+1)
    }
    return(<>
         <WrapperComponent 
         count={count} 
         increment={increment} 
        //  color={props.color} 
        //  name={props.name}
        {...props}
         />

    </>)
  }
    
    return HighOrderComp
}

export default HocComp

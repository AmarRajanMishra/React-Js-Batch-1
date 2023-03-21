
import React from 'react'
import MyNewContext from './MyNewContext';

const MyNewState = (props) => {
    const state = {
        Name : "Rajan",
        Age : 25,
        Gender : "Male"
    }
  return (
    <MyNewContext.Provider value={state}>
        {props.children}
    </MyNewContext.Provider>
    
  )
}

export default MyNewState;

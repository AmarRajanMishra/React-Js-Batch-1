import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

function Contact() {
    const location = useLocation()
    console.log(location)
    // const navigate = useNavigation()
    
    
  return (
    <div>
        <h1>Contact Us</h1>
        <h1>My Current Path Is : {location.pathname}</h1>
        {location.pathname == '/contact' ? <button>Click Me</button>:''}
        {/* <button onClick={()=>{navigation.goBack()}}></button> */}
        

        
    </div>
  )
}

export default Contact
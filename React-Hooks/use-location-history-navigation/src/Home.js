import React from 'react'
import { NavLink, useLocation} from 'react-router-dom'


function Home() {
    const location = useLocation()
    
    // console.log(navigation)
    // const history = useHistory()
    // console.log(history)
    
    
  return (
    <div>
        <h1>Home</h1>
        
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/contact' >Contact Us</NavLink>
            </li>
            <li>
                <NavLink to = '/about'>About Us</NavLink>
            </li>
        </ul>
        {location.pathname == '/contact' ? <button>Click Me</button>:''}
        
        
    </div>
  )
}

export default Home
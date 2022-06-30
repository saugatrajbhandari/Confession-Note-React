import React from 'react'
import '../assests/css/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-logo">
        <Link to='/' style={{textDecoration:"none"}}>
            Confess Note
        </Link>
        
        </div>
        <div className="navbar-about">
        <Link to='/about' style={{textDecoration:"none"}}>
            About Us
        </Link>
        
        </div>
    </div>
  )
}

export default Navbar
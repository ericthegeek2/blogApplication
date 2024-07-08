import React from 'react'



import {Link} from "react-router-dom";
import logo from "../index"
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
  return (
    
    <nav>
        <div className="container nav_container">
           <Link to='/' className='nav_logo'>
           <img src={logo} alt="Navbar Logo" />
           </Link>

           <ul className='nav_menu'>
             <li className='nav_menu_list'><Link to='/profile/:id' >Eric Migwi</Link></li>
             <li className='nav_menu_list'><Link to='/create'>Create post</Link></li>
             <li className='nav_menu_list'><Link to='/authors'>Authors</Link></li>
             <li className='nav_menu_list'><Link to='/logout'>Logout</Link></li>

           </ul>

           <button className='nav_toggle-btn'>

             <AiOutlineClose />
           </button>


        </div>
    </nav>
  )
}

export default Header

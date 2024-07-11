import React from 'react'



import {Link} from "react-router-dom";
//import {logo, thumbnail1, thumbnail2, thumbnail3, thumbnail4} from "../index"

import logo from "../index";

import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

import {useSelector} from "react-redux";

const Header = () => {

  const userName = useSelector(state => state.userData)
  return (
    
    <nav>
        <div className="container nav_container">
           <Link to='/' className='nav_logo'>
           <img src={logo} alt="Navbar Logo" />  
           </Link>

           <ul className='nav_menu'>
             <li><Link to='/profile/:id'>Eric Migwi</Link></li>
             <li><Link to='/create'>Create post</Link></li>
             <li><Link to='/authors'>Authors</Link></li>
             <li><Link to='/logout'>Logout</Link></li>

           </ul>

           <button className='nav_toggle-btn'>

             <AiOutlineClose />
           </button>


        </div>
    </nav>
  )
}

export default Header

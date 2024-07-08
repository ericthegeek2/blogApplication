import React from 'react'

import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li className='footer_categories_list'><Link to= '/posts/categories/Agriculture'>Agriculture</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Business'>Business</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Education'>Education</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Entertainment'>Entertainment</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Art'>Art</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Investment'>Science</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/Technology'>Technology</Link></li>
        <li className='footer_categories_list'><Link to= '/posts/categories/sports'>sports</Link></li> 
      </ul>

      <div className='footer_copyright'>
        <small><p>All Rights Reserved &copy; Copyright, Ericmigwi</p></small>

      </div>
    </footer>
  )
}

export default Footer

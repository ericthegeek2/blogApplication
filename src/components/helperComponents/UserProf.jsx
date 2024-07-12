import React, { useState } from 'react'

import {Link} from "react-router-dom";

import avatar15 from "../../assets/images/avatar15.jpg";

import { FaEdit } from "react-icons/fa";

import { FaCheck } from "react-icons/fa";


const UserProf = () => {
  
    const [avatar, setAvatar] = useState('')

  return (
    <section className='profile'>
        <div className='container profile_container'>
           <Link to={'/myPosts/:id'} className='btn'>My posts</Link>

           <div className='profile_details'>
               <div className='avatar_wrapper'>
                   <div className='profile_avatar'>
                       <img src={avatar15} alt="" />
                   </div>

                   {/*form to update avatar*/}
                   <form action="" className='avatar_form'>
                      <input type="file" name="avatar" id="avatar" onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
                      <label htmlFor="avatar"><FaEdit/></label>


                   </form>

                <button className='profile_avatar-btn'><FaCheck /></button>

               </div>

               <h1>Eric Migwi</h1>

           </div>

        </div>

    </section>
  )
}

export default UserProf

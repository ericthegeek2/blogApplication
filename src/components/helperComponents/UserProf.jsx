import React, { useState } from 'react'

import {Link} from "react-router-dom";

import avatar15 from "../../assets/images/avatar15.jpg";

import { FaEdit } from "react-icons/fa";

import { FaCheck } from "react-icons/fa";


const UserProf = () => {
  
    const [avatar, setAvatar] = useState(avatar15)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPasword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

  return (
    <section className='profile'>
        <div className='container profile_container'>
           <Link to='/myposts/:id' className='btn'>My posts</Link>

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

               {/*form to update user details */}
               <form action="" className='form profile_form'>

                <p className="form_error-message">This is an error message</p>
                <input type="text" placeholder='full Name' value={name} onChange={e => setName(e.target.value)} autoFocus/>
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
                <input type="text" placeholder='new password' value={newPasword} onChange={e => setNewPassword(e.target.value)}/>
                <input type="password" placeholder='confirm password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
                <button type='submit' className='btn primary'>Update details</button>
               </form>

           </div>

        </div>

    </section>
  )
}

export default UserProf

import React, {useState} from 'react'


import {Link} from "react-router-dom";

import {setUserdataSlice} from "../../features/feature1/userDataSlice";



const LoginHelper = () => {
   
    

    const [useData, setUserData] = useState({
       
        email: '',
        password: '',
        
    })



    const changeInputHandler = (e) =>{
        const { name, value } = e.target;
       
        setUserData(prevState =>{
            
            return {...prevState, [name]: value}
        })
    
       
        
    }

    //you cant pass multiple values to dispacht unless you pass an object

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const {email,password} = useData
         

    }


  return (
    <section className='login'>
        <div className="container">
            <h2>Sign In</h2>
            <form className='form login_form' onSubmit={handleFormSubmit}>
                <p className='form_error-message'>This is an error message</p>
                
                <input type="email" placeholder='Email' name='email' value={useData.email} onChange={changeInputHandler}/>
                <input type="password" placeholder='Password' value={useData.password} onChange={changeInputHandler}/>
                
                <button type='submit' className='btn primary' onSubmit={e => e.preventDefault}>Login</button>
            </form>

            <small>Don't have an account? <Link to='/register'>Sign up</Link></small>
            
        </div>

    </section>
  )
}

export default LoginHelper

import React, {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {setUserdataSlice} from "../../features/feature1/userDataSlice";



const Registerhelper = () => {

    const dispatch = useDispatch()

    const [useData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        const {name,email,password,confirmPassword} = useData
        dispatch(setUserdataSlice(name)) 

    }


   


    


  return (
    <section className='register'>
        <div className="container">
            <h2>Sign up</h2>
            <form className='form register_form' onSubmit={handleFormSubmit}>
                <p className='form_error-message'>This is an error message</p>
                <input type="text" placeholder='full name' name='name' value={useData.name} onChange={changeInputHandler} autoFocus/>
                <input type="email" placeholder='Email' name='email' value={useData.email} onChange={changeInputHandler}/>
                <input type="password" placeholder='Password' value={useData.password} onChange={changeInputHandler}/>
                <input type="password" placeholder='confirm password' value={useData.confirmPassword} onChange={changeInputHandler} />
                <button type='submit' className='btn primary' onSubmit={e => e.preventDefault}>Register</button>
            </form>

            <small>Already have an account?</small>
            
        </div>

    </section>
  )
}

export default Registerhelper

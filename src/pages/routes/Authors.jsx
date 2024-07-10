import React from 'react'

import { useSelector} from 'react-redux'


//name: '',
//email: '',
//password: '',
//confirmPassword:

const Authors = () => {

 const userName = useSelector(state => state.userData) 
 
  return (
    <div style={{marginTop: '15%'}}>
      <p>heey {userName.name} ˗ˋˏ ♡ ˎˊ˗ , publish your passions, your way</p>
      <small>Create a unique and beautiful blog easily</small>
    </div>
  )
}

export default Authors

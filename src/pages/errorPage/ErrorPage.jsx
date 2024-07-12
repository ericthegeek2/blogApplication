import React from 'react'
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', rowGap: '20px', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Oooops! Page Not Found!!😭😭</h3>
      <Link to='/'><button className='btn primary'>Go Home</button></Link>
    </div>
  )
}

export default ErrorPage

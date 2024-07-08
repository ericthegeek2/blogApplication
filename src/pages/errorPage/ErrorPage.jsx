import React from 'react'
import {Link} from "react-router-dom";


const ErrorPage = () => {
  return (
    <section >
       <div className='error-page' style={{width: '100vw'}}>
        <div className='center' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '15px'}}>
          <h3>ooops 😭😭page not found!! </h3>
           <Link to='/' className='btn_primary'>Go Back Home</Link>
        </div>

       </div>

    </section>
  )
}

export default ErrorPage

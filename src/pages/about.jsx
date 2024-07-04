import React from 'react'

import aboutBackground from '../assets/blogHomeBackground.jpg'

const AboutComponent = () => {
  return (

      <section className='Main' style={{width: "100vw", height: '100vh', backgroundImage: `url(${aboutBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <nav className='navMenu' style={{width: '100vw',padding: '50px', display: 'flex', flexDirection: 'row', justifyContent: "space-between",alignItems: 'center', listStyle: 'none'}}>
          <a href=""><h2>my blog</h2></a>

          <div className='menu-auth' style={{display: "flex", flexDirection: "row", columnGap: "20px"}}>
          <a href=""><h3>home</h3></a>  
          <a href=""><h3>blog</h3></a>
          <a href=""><h3>contacts</h3></a>
          <a href=""><h3>about</h3></a>
          </div>
          <div className='menu-auth' style={{display: "flex", flexDirection: "row", columnGap: "20px"}}>
          <a href=""><h3>Sign Out</h3></a>  
          <a href=""><h3>Sign In</h3></a>
          </div>

          
       
        </nav>

        <section className='section' style={{width: '100%', height: '15%', display: 'flex', justifyContent: 'center', marginTop: "10%"}}>
            <div className='sectionCreate' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '25px'}}>
            <h1 style={{color: 'white'}}>Publish your passions, your way</h1> 
             <h3 style={{color: 'white'}}>Create a unique and beautiful blog easily</h3>
             <button style={{color: 'white', backgroundColor: 'orangered'}}>create your blog</button> 
            </div>
        </section>
        
        
        </section>
  )}

  export default AboutComponent

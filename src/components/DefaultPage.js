import React from 'react'
import TypeIt from 'typeit-react'
import '../index.css'

const DefaultPage = () => {
  return (
    <>
    <div className='default' >
        <nav className='default-nav' >
            <h2>letswatch</h2>
            <button className='sign-in-btn' > Sign in</button>
        </nav>
        <div className='welcomeMsg' >
            <h1><TypeIt options={{ loop: true }}>Welcome to letswatch. </TypeIt>  </h1> 
            <h2> Your one-stop-shop for cinematic entertainment! </h2> 
            <h3> So sit back relax, and let us take you on a journey through the art of storytelling.</h3>
            <div className='welcomeBtn'>
              <button className='get-started-btn' >Get Started!</button>
            </div>
        </div>
    </div>
    <div className='concord-img-gradient'>

    </div>
    </>
  )
}

export default DefaultPage
import React, {useState} from 'react'
import TypeIt from 'typeit-react'
import '../index.css'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'


const DefaultPage = () => {
  const [showSignInModal, setShowSignInModal]= useState(false)  
  const [showSignUpModal, setShowSignUpModal]= useState(false)  
return (
    <>
    <div className='default' >
        <nav className='default-nav' >
            <h2>letswatch</h2>
            <button className='sign-in-btn' onClick={() => {setShowSignInModal(true); setShowSignUpModal(false)}}> Sign in</button>
        </nav>
        <div className='welcomeMsg' >
            <h1>
              <TypeIt options={{ loop: true }}>
                Welcome to letswatch. 
              </TypeIt>
            </h1> 
            <h2> Your one-stop-shop for cinematic entertainment! </h2> 
            <h3> So sit back, relax, and let us take you on a journey through the art of storytelling.</h3>
            <div className='welcomeBtn'>
              <button className='get-started-btn' onClick={() => {setShowSignUpModal(true); setShowSignInModal(false)}}>Get Started Here</button>
            </div>
        </div>
    </div>
    <div className='concord-img-gradient'>

    </div>
    {showSignInModal && <SignInModal setShowSignInModal={setShowSignInModal} setShowSignUpModal={setShowSignUpModal} />}
    {showSignUpModal && <SignUpModal setShowSignUpModal={setShowSignUpModal} setShowSignInModal={setShowSignInModal}/>}
    </>
  )
}

export default DefaultPage
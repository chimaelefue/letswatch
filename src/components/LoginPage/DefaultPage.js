import React, {useState} from 'react'
import TypeIt from 'typeit-react'
import '../../index.css'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import Button from '../Button'


const DefaultPage = () => {
  const [showSignInModal, setShowSignInModal]= useState(false)  
  const [showSignUpModal, setShowSignUpModal]= useState(false)  

  const handleShowLoginForm = () =>{
    setShowSignInModal(true);
    setShowSignUpModal(false);
  }

  const handleShowRegisterForm = () =>{
    setShowSignInModal(false)
    setShowSignUpModal(true);
  }

return (
    <>
    <div className='default' >
        <nav className='default-nav' >
            <h2>letswatch</h2>
            <Button value= {"Sign In"} className={"sign-in-btn"} onClick= {handleShowLoginForm}   />
        </nav>
        <div className='welcome-msg' >
            <h1>
              <TypeIt options={{ loop: true }}>
                Welcome to letswatch. 
              </TypeIt>
            </h1> 
            <h2> Your one-stop-shop for cinematic entertainment! </h2> 
            <h3> So sit back, relax, and let us take you on a journey through the art of storytelling.</h3>
            <div className='welcome-btn'>
              <Button value={"Get Started Here"} className={"get-started-btn"} onClick= {handleShowRegisterForm} />
            </div>
        </div>
    </div>
    <div className='concord-img-gradient'>

    </div>
    {showSignInModal && <SignInModal  handleShowRegisterForm={handleShowRegisterForm} setShowSignInModal={setShowSignInModal} />}
    {showSignUpModal && <SignUpModal setShowSignUpModal={setShowSignUpModal}  />}
    </>
  )
}

export default DefaultPage
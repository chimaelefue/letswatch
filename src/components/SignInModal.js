import { CancelSignInIcon } from '../icons'
import React from 'react'
import '../index.css'


const SignInModal = ({setShowSignInModal, setShowSignUpModal}) => {
  return (
    <>
    <div className='signInModal'>
        
        <div className='sign-in-container'>
            
            
            <form className='signInContent'>
                <div className='signInHeader'>
                    <h2>Sign In</h2>
                    <div className='CancelIcon' onClick={() => setShowSignInModal(false)}>
                        <CancelSignInIcon />
                    </div>
                </div>

                <div>
                    <input className='signInEmail' type="text" placeholder='Email or phone number'></input>
                </div>
                <div>
                    <input className='signInPassword' type="password" placeholder='Password'></input>
                </div>
                <div>
                    <input className='signInSubmit' type='submit' value="Sign In"></input>
                </div>
            </form>
            <div>
                <p>New to Letswatch?</p>
            </div>
            <div>
            <button className='signUpSubmit' onClick={() => {setShowSignInModal(false); setShowSignUpModal(true)}}>Sign Up</button>

            </div>
        </div>
    </div>
     <div className='concord-img-gradient'> </div>
     </>
  )
}

export default SignInModal
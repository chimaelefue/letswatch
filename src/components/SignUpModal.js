import { CancelSignInIcon } from '../icons'
import React from 'react'
import '../index.css'

const SignUpModal = ({setShowSignUpModal}) => {
  return (
    <>
    <div className='signInModal'>
        <div className='sign-in-container'>
        <form className='signInContent'>
        <div className='signInHeader'>
                    <h2>Sign Up</h2>
                    <div className='CancelIcon' onClick={() => setShowSignUpModal(false)}>
                        <CancelSignInIcon />
                    </div>
                </div>
                <div>
                    <input className='signInEmail' type="text" placeholder='First and last name'></input>
                </div>
                <div>
                    <input className='signInEmail' type="text" placeholder='Email or phone number'></input>
                </div>
                <div>
                    <input className='signInPassword' type="password" placeholder='Password'></input>
                </div>
                <div>
                    <p>Password must be at least 6 characters.</p>
                </div>
                <div>
                    <input className='signInPassword' type="password" placeholder='Re-enter password'></input>
                </div>
                <div>
                    <input className='signInSubmit' type='submit' value="Sign Up"></input>
                </div>
        </form>
        </div>
    </div>
    <div className='concord-img-gradient'> </div>
    </>
  )
}

export default SignUpModal
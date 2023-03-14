import { CancelSignInIcon } from '../../icons'
import React from 'react'
import '../../index.css'
import Button from '../Button'

const SignUpModal = ({setShowSignUpModal}) => {
  return (
    <>
    <div className='sign-in-modal'>
        <div className='sign-in-container'>
        <form className='sign-in-content'>
        <div className='sign-in-header'>
                    <h2>Sign Up</h2>
                    <div className='Cancel-icon' onClick={() => setShowSignUpModal(false)}>
                        <CancelSignInIcon />
                    </div>
                </div>
                <div>
                    <input className='sign-in-email' type="text" placeholder='First and last name'></input>
                </div>
                <div>
                    <input className='sign-in-email' type="email" placeholder='Email'></input>
                </div>
                <div>
                    <input className='sign-in-password' type="password" placeholder='Password'></input>
                </div>
                <div>
                    <p>Password must be at least 6 characters.</p>
                </div>
                <div>
                    <input className='sign-in-password' type="password" placeholder='Re-enter password'></input>
                </div>
                <div>
                    <Button className='sign-in-submit' type='submit' value="Sign Up" />
                </div>
        </form>
        </div>
    </div>
    <div className='concord-img-gradient'> </div>
    </>
  )
}

export default SignUpModal
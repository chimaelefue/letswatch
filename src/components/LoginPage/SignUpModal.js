import { CancelSignInIcon } from '../../icons'
import React ,{useState} from 'react'
import '../../index.css'
import Button from '../Button'

const SignUpModal = ({setShowSignUpModal}) => {
    const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the email and password in localStorage
    localStorage.setItem('credentials', JSON.stringify({ email, password }));
    // Clear the form inputs
    setFirstName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <div className='sign-in-modal'>
        <div className='sign-in-container'>
        <form className='sign-in-content' onSubmit={handleSubmit}>
        <div className='sign-in-header'>
                    <h2>Sign Up</h2>
                    <div className='Cancel-icon' onClick={() => setShowSignUpModal(false)}>
                        <CancelSignInIcon />
                    </div>
                </div>
                <div>
                    <input 
                        className='sign-in-email' 
                        type="text" 
                        placeholder='First and last name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        className='sign-in-email' 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>

                <div>
                    <input 
                        className='sign-in-password' 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <p>Password must be at least 6 characters.</p>
                </div>
                <div>
                    <input className='sign-in-password' type="password" placeholder='Re-enter password' />
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
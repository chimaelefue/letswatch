import { CancelSignInIcon } from '../../icons'
import React, {useState} from 'react'
import '../../index.css'
import HomePage from '../home/HomePage'
import { useNavigate } from 'react-router'
import Button from '../Button'


const SignInModal = ({handleShowRegisterForm, setShowSignInModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const signInSubmit = (e) => {
        e.preventDefault();
      
        // Check if email and password are not empty
        if (email !== "" && password !== "") {
          // Navigate to home page using React Router
          navigate("/movies");
        }
       
    };
      
  return (
    <>
    <div className='sign-in-modal'>
        
        <div className='sign-in-container'>
            
            
            <div className='sign-in-content'>
                <div className='sign-in-header'>
                    <h2>Sign In</h2>
                    <div className='Cancel-icon' onClick={()=>{setShowSignInModal(false)}}>
                        <CancelSignInIcon />
                    </div>
                </div>
                <form onSubmit={signInSubmit}>
                    <div>
                        <input className='sign-in-email' type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input className='sign-in-password' type="password" value={password} placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <Button className='sign-in-submit' type="submit" value="Sign In" />
                    </div>
                </form>
            </div>
            <div>
                <p>New to Letswatch?</p>
            </div>
            <div>
            <Button className='sign-up-submit' onClick= {handleShowRegisterForm} value="Sign Up" />

            </div>
        </div>
    </div>
     <div className='concord-img-gradient'> </div>
     </>
  )
}

export default SignInModal
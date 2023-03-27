import { CancelSignInIcon } from '../../icons'
import React, {useState, useEffect} from 'react'
import '../../index.css'
import HomePage from '../home/HomePage'
import { useNavigate } from 'react-router'
import Button from '../Button'
import { updateEmail } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { MOVIES } from '../../routes'


const SignInModal = ({handleShowRegisterForm, setShowSignInModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Check if user is stored in LocalStorage
    const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
    const storedMail = storedCredentials.email;
    const storedPass = storedCredentials.password;
    
    // Set initial authentication state
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('authenticated'));

    // Handle login
    const handleLogin = (email, password) => {
        if (email === storedMail && password === storedPass) {
            // Set authenticated status 
            setAuthenticated(true);
            // Save user and authentication status to LocalStorage
            // localStorage.setItem('user', JSON.stringify(storedUser));
            localStorage.setItem('authenticated', true);
        } else {
            // Authentication failed
            alert("Invalid email or password");
        }
    };
 

    const signInSubmit = (e) => {
        e.preventDefault();
      
        // Check if email and password are not empty
        if (email !== "" && password !== "") {
            // Attempt to log in
            handleLogin(email, password);
            // Navigate to home page using React Router
            navigate(MOVIES);
        }
        dispatch(updateEmail(email))
    };

    useEffect(() => {
        // Update authenticated state when 'authenticated' key in LocalStorage changes
        setAuthenticated(!!localStorage.getItem('authenticated'));
      }, []);
    
      
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
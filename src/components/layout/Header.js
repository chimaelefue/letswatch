import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const Header = () => {
  return (
    <>
        <div className= "header-bar">
            <div className='header-first-details'>
                <div>
                <Link to="/movies" className='home-link-text'>
                    <h1>Letswatch</h1>
                </Link>
                </div>
                
                
            </div>
            <div className='header-second-details'>
                <div className='header-input-text'>
                    <input type="text" placeholder='Search' />
                </div>
                <div className='avatar'>
                    <img
                    src='prof2.jpg'
                    alt='Avatar'
                    />
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landingpage.css';

const LandingPage = () => {
  return (
    <div className='landingpage'>
        <Link to="/merchant">
            <img src="https://cdn-icons-png.flaticon.com/128/9322/9322043.png" alt="" /> Merchant
        </Link>
        <Link to="/user">
            <img src="https://cdn-icons-png.flaticon.com/128/236/236832.png" alt="" /> User
        </Link>
    </div>
  )
}

export default LandingPage
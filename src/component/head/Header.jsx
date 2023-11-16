import React from 'react'
import { Link } from 'react-router-dom'
import '../head/Header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to="/">
            <img src="https://cdn-icons-png.flaticon.com/128/3364/3364355.png" alt="movie icon" style={{ width: "5vw",
    height: "6vh"}}/>MovieApp
            </Link>
        </div>

    </div>
  )
}

export default Header
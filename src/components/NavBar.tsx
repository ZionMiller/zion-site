import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='/'>Zion Miller</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>contact</Link>
    </div>
  )
}

export default NavBar
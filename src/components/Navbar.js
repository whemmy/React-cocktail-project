import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </NavLink>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Navbar

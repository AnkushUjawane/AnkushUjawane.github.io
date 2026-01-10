import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-group'>
          <ul className='nav-menu'>
            <li className="nav-item">
              <NavLink className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                Skills
              </NavLink>
            </li>
          </ul>
        </div>

        <div>Hi</div>
      </nav>
    </div>
  )
}

export default navbar
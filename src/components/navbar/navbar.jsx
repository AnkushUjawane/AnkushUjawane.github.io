import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { GitHub, LinkedIn } from '@mui/icons-material'
import "./navbar.css"
const navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-group'>
          <ul className='nav-menu'>
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/about'>
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
            <li className="nav-item">
              <NavLink className="nav-link">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Stack className='icon-menu' direction={"row"} spacing={4} alignItems={"center"}>
            <IconButton aria-label='Github Profile' color='default' href='https://github.com/AnkushUjawane' target='_blank'>
              <GitHub sx={{fontSize: 30}}/>
            </IconButton>
            <IconButton aria-label='LinkedIn Profile' color='primary' href='https://www.linkedin.com/in/ankushujawane/' target='_blank'>
              <LinkedIn sx={{fontSize: 30}}/>
            </IconButton>
          </Stack>
        </div>
      </nav>
    </div>
  )
}

export default navbar
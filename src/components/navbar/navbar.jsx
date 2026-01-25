import React from 'react'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { GitHub, LinkedIn } from '@mui/icons-material'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='nav-inner'>
          <div className='nav-group'>
            <ul className='nav-menu'>
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#skill">Skills</a>
              </li>
            </ul>
          </div>

          <div>
            <Stack className='icon-menu' direction={"row"} spacing={{xs:1, md:3}} alignItems={"center"}>
              <IconButton aria-label='Github Profile' color='default' href='https://github.com/AnkushUjawane' target='_blank'>
                <GitHub sx={{ fontSize: { xs: "1.3rem", md: "2rem", sm: "1.5rem" } }} />
              </IconButton>
              <IconButton aria-label='LinkedIn Profile' color='primary' href='https://www.linkedin.com/in/ankushujawane/' target='_blank'>
                <LinkedIn sx={{ fontSize: { xs: "1.3rem", md: "2rem", sm: "1.5rem" } }} />
              </IconButton>
            </Stack>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
import React from 'react'
import "./home.css"
import AnkushPhoto from "../../assets/Images/ankush.JPG"

const Home = () => {
  return (
    <div className="home" id='home'>
      <div className='content'>
        <div className='hi'>
          <h3>Hello, I'm</h3>
        </div>
        <div className='name'>
          <h1>Ankush Ujawane</h1>
        </div>
        <div className='role'>
          <h2>Software Engineer | Web Developer</h2>
        </div>
        <div className='home-btn'>
          <a href="#projects">
            <button className='neo-btn'>My Projects</button>
          </a>
          <a href="#about">
            <button className='neo-btn'>About Me</button>
          </a>
        </div>
      </div>
      <div className='photo'>
        <img src={AnkushPhoto} alt="Ankush Image" width={350} className='my-photo' />
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import './about.css'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-container'>
        <h1>About Me</h1>
        <p>I am passionate Computer Science Engineering student currently in my final year at SGGSIE&T Nanded. My true passion lies in developing innovative software solutions that make a difference. I have a deep love for creating solutions using various technologies such as Docker, Jenkins, Kubernetes and full-stack development. I'm seeking opportunities to apply my knowledge in practical settings, collaborate with experienced professionals, and contribute to meaningful projects that make a difference in how we interact with technology.</p>
      </div>
      <div className='side-container'>
        <div className='education'>
          <h2>Education: </h2>
          <div className='btech'>
            <h3>
              <li>B.Tech in Computer Science & Engineering</li>
            </h3>
            <div className='btech-info'>
              <p>SGGSIE&T Nanded</p>
              <p>Nov 2022 - May 2026</p>
            </div>
            <p className='grade'>CGPA: 7.02</p>
          </div>
          <div className='hsc'>
            <h3><li>Higher Secondary Education</li></h3>
            <div className='hsc-info'>
              <p>Late Jyoti Janolkar Jr College</p>
              <p>Jun 2021 - May 2022</p>
            </div>
            <p className='grade'>Percentage: 80.17%</p>
          </div>
        </div>
        <div className='interests'>
          <h2>Interests: </h2>
          <ol className='interests-list'>
            <li>Web Development</li>
            <li>Devops</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default About
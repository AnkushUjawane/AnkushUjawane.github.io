import React from 'react'
import { projects } from './projectdata.js'
import './project.css'

const Project = () => {
  return (
    <div className='project' id='projects'>
        <h1>My Projects</h1>
        <div className='project-card'>
            {projects.map(proj => (
                <div className='cards'>
                    <div className='project-name'>
                        <h2>{proj.name}</h2>
                    </div>
                    <div className='project-desp'>
                        <p>{proj.description}</p>
                    </div>
                    <div className='project-code'>
                        <button>{proj.githubLink}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
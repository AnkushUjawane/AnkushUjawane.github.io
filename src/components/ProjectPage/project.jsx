import React from 'react'
import { projects } from './projectdata.js'
import './project.css'

const Project = () => {
  return (
    <div className='project' id='projects'>
        <h1>My Projects</h1>
        <div className='project-card'>
            {projects.map((proj, index) => (
                <div className='cards' key={index}>
                    <div className='project-name'>
                        <h2>{proj.name}</h2>
                    </div>
                    <div className='project-desp'>
                        <p>{proj.description}</p>
                    </div>
                    <div className='project-code'>
                        <a href={proj.githubLink} target='_blank' rel='noopener noreferrer'>
                            <button>Github</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project
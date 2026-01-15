import React from 'react'
import { projects } from './projectdata.js'
import './project.css'

function project() {
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
                    <div className='project-skill'>
                        <h4>{proj.skills[0]}</h4>
                        <h4>{proj.skills[1]}</h4>
                        <h4>{proj.skills[2]}</h4>
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

export default project
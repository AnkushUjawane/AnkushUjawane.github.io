import React from 'react'
import './project.css'

function project() {
  return (
    <div className='project' id='projects'>
        <h1>My Projects</h1>
        <div className='project-card'>
            <div className='cards'>
                <div className='project-name'>
                    <h2>Project Name</h2>
                </div>
                <div className='project-desp'>
                    <p>Project Description</p>
                </div>
                <div className='project-skill'>
                    <h4>skill1</h4>
                    <h4>skill2</h4>
                    <h4>skill3</h4>
                </div>
                <div className='project-code'>
                    <button>Github</button>
                </div>
            </div>

            <div className='cards'>
                <div className='project-name'>
                    <h2>Project Name</h2>
                </div>
                <div className='project-desp'>
                    <p>Project Description</p>
                </div>
                <div className='project-skill'>
                    <h4>skill1</h4>
                    <h4>skill2</h4>
                    <h4>skill3</h4>
                </div>
                <div className='project-code'>
                    <button>Github</button>
                </div>
            </div>

            <div className='cards'>
                <div className='project-name'>
                    <h2>Project Name</h2>
                </div>
                <div className='project-desp'>
                    <p>Project Description</p>
                </div>
                <div className='project-skill'>
                    <h4>skill1</h4>
                    <h4>skill2</h4>
                    <h4>skill3</h4>
                </div>
                <div className='project-code'>
                    <button>Github</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default project
import React from 'react';
import { projects } from '../../config';
import ProjectCards from '../ProjectCards';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h3 className="section-title">My Work</h3>

            <div className="projects-wrapper">
                {
                    projects.map((project, id) => (
                        <ProjectCards key={id} project={project} />
                    ))
                }
            </div>
        </section>
    )
}

export default Projects

import React from 'react';
import Skill from '../../components/skill/Skill';
import Carousel2demo from '../../components/carousel/Carousel2demo';
import './projects.css';

const Projects = () => (
    <div className="gpt3__projects section__margin" id="projects">
        <div className="gpt3__projects-feature">
            <Skill title="Projects" />
        </div>
        <div className="gpt3__projects-heading">
            <h2 className="gradient__text"> Here's a selection of stuff I've built.</h2>
            <a href="https://github.com/gusmontoya" target="_blank" rel="noreferrer" >
                <p>Explore my Github Repo</p>
            </a>
        </div>
        <div className="project-cards">
            <Carousel2demo />
        </div>
    </div>
);

export default Projects;
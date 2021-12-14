import React from 'react';
import { Skill } from '../../components';
import './projects.css';

const Projects = () => {
    return (
        <div className="gpt3__Projects section__margin" id="Projects" >
            <div className="gpt3__Projects-Skill">
                <Skill title="Projects" text="This sections highlights my latest projects. Current projects primarily encompus front end and will expand to back end for a full MERN stack" />
            </div>
            <div className="gpt3__Projects-heading">
                <h1 className="gradient__text">
                The road to success is always under construction.
                </h1>
            </div>
            <div className="gpt3__Projects-container">
                <Skill title="React CV" text="We so opinion friends me message as delight. Whole front do of plate heard of ought." />
                <Skill title="Travel Journal" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own partments b" />
                <Skill title="Job Application Tracker" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own partments b" />
            </div>
        </div>
    )
}

export default Projects;
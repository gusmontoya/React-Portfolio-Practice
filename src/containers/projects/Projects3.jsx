import React from 'react';
import Skill from '../../components/skill/Skill';

import Article from '../../components/article/Article';
import { repo01, repo02, repo03 } from './imports';
import { DiHtml5, DiCss3 } from "react-icons/di";
import { SiJavascript, SiReact } from "react-icons/si";

import './projects3.css';

const Projects = () => (
    <div className="gpt3__projects section__margin" id="projects">
        <div className="gpt3__projects-feature">
        <Skill title="Projects" />
        </div>
        <div className="gpt3__projects-heading">
        <h1 className="gradient__text">The road to success is always under construction. Here's a selection of stuff I've built.</h1>
        <a href="https://github.com/gusmontoya" target="_blank" rel="noreferrer" ><p>Explore my github Library</p></a>
        </div>
            <div className="cards__container">
                <div className="gpt3__projects-container">
                
                <a href="https://scrimba.com"><Article imgUrl={repo01} width="300px" title="Personal CV" text="A solo React project from scrimba." /></a>
            
                <div className="container-icons-mini">
                    <div className="box-icon">                            
                        <DiHtml5 size={20} />
                        <DiCss3 size={20} />
                        <SiJavascript size={20} />
                        <SiReact size={20} />
                    </div>
                </div> 
            </div>
            <div className="gpt3__projects-container">
            
            <a href="https://scrimba.com"><Article imgUrl={repo02} title="Travel Journal" width="300px" text="A solo React project from scrimba." /></a>
        
            <div className="container-icons-mini">
                                <div className="box-icon">                            
                                    <DiHtml5 size={20} />
                                    <DiCss3 size={20} />
                                    <SiJavascript size={20} />
                                    <SiReact size={20} />
                                </div>
                            </div>
            </div>
            <div className="gpt3__projects-container">
            
            <a href="https://www.freecodecamp.org/"><Article imgUrl={repo03} width="300px" title="Real-Estate Site" text="This will be a full MERN stack Real Estate website"/></a>
            <div className="container-icons-mini">
                                <div className="box-icon">                            
                                    <DiHtml5 size={20} padding="0 20px"/>
                                    <DiCss3 size={20} />
                                    <SiJavascript size={20} />
                                    <SiReact size={20} />
                                </div>
                            </div>
            </div>
        </div>
    </div>
);

export default Projects;

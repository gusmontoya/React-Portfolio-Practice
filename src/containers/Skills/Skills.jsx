import React from 'react';
import { FaReact, FaHtml5, FaCss3  } from 'react-icons/fa';
import { SiPostman, SiMongodb, SiExpress, SiAndroidstudio, SiAffinityphoto, SiAffinitydesigner, SiJavascript, SiRedux, SiVisualstudiocode, SiTypescript, SiFigma } from "react-icons/si";
import { DiGithubBadge, DiNodejs, DiGit, DiResponsive } from "react-icons/di";
import './skills.css';

const Skills = () => (
  <div className="gpt3__skills section__padding" id="skills">
    <div className="gpt3__skills-heading">
      <h1 className="gradient__text">My Toolbox by which magic happens</h1>
      <p>It's not the amount of tools you have, but how well you use the ones you do have.</p>
    </div>
    <section className="container-icons">
      <div className="box-icon">
        <ul className="fa__icon-frontEnd">
            <li className="icon__list"><SiJavascript size={40} color="#F0DB4F"/>JavaScript</li>
            <li className="icon__list"><FaReact size={40} color="#61DBFB"/>React</li>
            <li className="icon__list"><SiRedux size={40} color="#764abc "/>Redux</li>
            <li className="icon__list"><FaHtml5 size={40} color="orange"/>HTML5</li>
            <li className="icon__list"><FaCss3 size={40} color="#264de4 "/>CSS3</li>
        </ul>
      </div>
      <div> 
        <ul className="fa__icon-frontEnd">
            <li className="icon__list"><DiGit size={40} color="red"/>Git</li>
            <li className="icon__list"><DiGithubBadge size={40} color="black"/>Github</li>
            <li className="icon__list"><SiVisualstudiocode size={40} color="#0078d7"/>VSCode</li>
            <li className="icon__list"><SiTypescript size={40} color="navy"/>Typescript</li>
            <li className="icon__list"><SiFigma size={40} color="black"/>Figma</li>
        </ul>
        <ul className="fa__icon-frontEnd">
            <li className="icon__list"><SiAffinitydesigner size={40} color="blue"/>Affinity Designer</li>
            <li className="icon__list"><SiAffinityphoto size={40} color="magenta"/>Affinity Photo</li>
            <li className="icon__list"><SiAndroidstudio size={40} color="#78c257"/>Android Studio</li>
            <li className="icon__list"><SiPostman size={40} color="orange"/>Postman</li>
            
        </ul>
      </div>
      <div>
        <ul className="fa__icon-frontEnd">
            <li className="icon__list"><DiNodejs size={40} color="olive"/>Node JS</li>
            <li className="icon__list"><SiExpress size={40} color="black"/>Express</li>
            <li className="icon__list"><SiMongodb size={40} color="green"/>Mongodb</li>
        </ul>
      </div>
  </section>
  </div>
);

export default Skills;

import React from 'react';
import { Skill } from '../../components';
import { FaReact, FaHtml5, FaCss3  } from 'react-icons/fa';
import { SiPostman, SiMongodb, SiExpress, SiAndroidstudio, SiAffinityphoto, SiAffinitydesigner, SiJavascript, SiRedux, SiVisualstudiocode, SiTypescript, SiFigma } from "react-icons/si";
import { DiGithubBadge, DiNodejs, DiGit } from "react-icons/di";
import './skills.css';

const Skills = () => (
  <section className="gpt3__skills section__padding" id="skills">
    <div className="gpt3__skills-heading wrapper">
      <Skill title="Skills" />
      <h1 className="gradient__text">My toolbox for web dev magic</h1>
      {/* <p>It's not the amount of tools you have, but how well you use the ones you do have.</p> */}
        <div className="container-icons skills-tools">
          <div className="box">
              <SiJavascript className="icon__list" color="#fff"/>
              <p>JavaScript</p>
          </div>
          <div className="box">
              <FaReact className="icon__list" color="#fff"/>
              <p>React</p>
          </div>
          <div className="box">
              <SiRedux className="icon__list" color="#fff "/>
              <p>Redux</p>
          </div>
          <div className="box">
              <FaHtml5 className="icon__list" color="#fff"/>
              <p>HTML5</p>
          </div>
          <div className="box">
              <FaCss3 className="icon__list" color="#fff "/>
              <p>CSS3</p>
          </div>
          <div className="box">
              <DiGit className="icon__list lg" color="#fff"/>
              <p>Git</p>
          </div>
          <div className="box">
              <DiGithubBadge className="icon__list lg" color="#fff"/>
              <p>Github</p>
          </div>
          <div className="box">
              <SiVisualstudiocode className="icon__list" color="#fff"/>
              <p>VSCode</p>
          </div>
          <div className="box">
              <SiTypescript className="icon__list" color="#fff"/>
              <p>Typescript</p>
          </div>
          <div className="box">
              <SiFigma className="icon__list" color="#fff"/>
              <p>Figma</p>
          </div>
          <div className="box">
              <SiAffinitydesigner className="icon__list" color="#fff"/>
              <p>Affinity Designer</p>
          </div>
          <div className="box">
              <SiAffinityphoto className="icon__list" color="#fff"/>
              <p>Affinity Photo</p>
          </div>
          <div className="box">
              <SiAndroidstudio className="icon__list" color="#fff"/>
              <p>Android Studio</p>
          </div>
          <div className="box">
              <SiPostman className="icon__list" color="#fff"/>
              <p>Postman</p>
          </div>
          <div className="box">
              <DiNodejs className="icon__list lg" color="#fff"/>
              <p>Node JS</p>
          </div>
          <div className="box">
              <SiExpress className="icon__list" color="#fff"/>
              <p>Express</p>
          </div>
          <div className="box">
              <SiMongodb className="icon__list" color="#fff"/>
              <p>Mongodb</p>
          </div>
        </div>
    </div>
  </section>
);

export default Skills;

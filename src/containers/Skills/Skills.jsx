import React from 'react';
import frontEnd from './frontEnd';
import tools from './tools';
import backEnd from './backEnd';
import Skill from '../../components/skill/Skill';
import './skills.css';

// Turn features into projects list or it can be skills
const skillsData = [
  {
    image: {frontEnd},
    title: 'Front End',
    // text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    image: {tools},
    title: 'Tools',
    // text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    image: {backEnd},
    title: 'Back End',
    // text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
];

const Skills = () => (
  <div className="gpt3__skills section__padding" id="skills">
    <div className="gpt3__skills-heading">
      <h1 className="gradient__text">My Toolbox by which magic happens</h1>
      <p>It's not the amount of tools you have, but how well you use the ones you do have.</p>
    </div>
    <div className="gpt3__skills-container">
      {skillsData.map((item, index) => (
        <Skill title={item.title} image={item.image} key={item.title + index} />
      ))}   
    </div>
    {/* <div className="App">
      <div className="imgContainer">
        {frontEnd.map((img, index) => (
          <img src={img} alt="logos" />
        ))}
        {tools.map((img, index) => (
          <img src={img} alt="logos" />
        ))}
        {backEnd.map((img, index) => (
          <img src={img} alt="logos" />
        ))}
      </div>
    </div> */}
  </div>
);

export default Skills;

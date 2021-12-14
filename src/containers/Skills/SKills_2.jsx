import React from 'react';

const skillsIMG = [
    {
        title: 'Front End',
        imageFE01: 'JS',
        imageFE02: 'React',
        imageFE03: 'Redux',
        imageFE04: 'React Native',
        imageFE05: 'HTML',
        imageFE06: 'CSS3',
        imageFE07: 'Typescript',
        
    },
    {
        title: 'Tools',
        imageTLS01: 'Git',
        imageTLS02: 'Github',
        imageTLS03: 'VSCode',
        imageTLS04: 'Figma',
        imageTLS05: 'Android Stuido',
        imageTLS06: 'Affinity-Designer',
        imageTLS07: 'PostMan',
    },
    {
        title: 'Back End',
        image01: 'Node',
        image02: 'Express',
        image03: 'MongoDB',
    },
];

const Frontend = () => (
    
)


const Skills = () => (
  <div className="gpt3__skills section__padding" id="skills">
    <div className="gpt3__skills-heading">
      <h1 className="gradient__text">My Toolbox by which magic happens</h1>
      <p>Apps are like sandwichs, they are made of layers.</p>
    </div>
    <div className="gpt3__skills-container">
        <ul className="frontEnd">
            <li >github</li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  </div>
);

export default Skills;

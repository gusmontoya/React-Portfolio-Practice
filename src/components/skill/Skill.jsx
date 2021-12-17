import React from 'react';

import './skill.css';



const Skill = ({ title, text, image, key }) => (
  <div className="gpt3__skill-container__skill" key={key}>
    <div className="gpt3__skill-image__skill">
      <img src={image} />
    </div>
    <div className="gpt3__skill-container__skill-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__skill-container_skill-text">
      <p>{text}</p>
    </div>
    <div className="gpt3__skill-image">
      <img src={image}></img>
    </div>
  </div>
);

export default Skill;

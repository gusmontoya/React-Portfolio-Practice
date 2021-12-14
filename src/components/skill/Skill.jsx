import React from 'react';
import './skill.css';

const Skill = ({ title, text }) => (
  <div className="gpt3__skill-container__skill">
    <div className="gpt3__skill-container__skill-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__skill-container_skill-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Skill;

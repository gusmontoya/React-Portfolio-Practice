import React from 'react';  
import './skill.css';



const Skill = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      
      <p>{text}</p>
    </div>
  </div>
);

export default Skill;

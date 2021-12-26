import React from 'react';  
import { repo01, repo02, repo03 } from '../../containers/projects/imports';
import './skill2.css';



// const Skill = ({ title, text, image }) => (
//   <div className="gpt3__skill-container__skill" >
//     <div className="gpt3__skill-container__skill-title">
//       <div />
//       <h1>{title}</h1>
//     </div>
//     <div className="gpt3__skill-container_skill-text">
//       <p>{text}</p>
//     </div>
//   </div>
// );

// export default Skill;

const Skill = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      
      <p>{text}</p>
    </div>
  </div>
);

export default Skill;

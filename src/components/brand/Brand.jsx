import React from 'react';
import { VSCode, Github, Git, Affinity, Codepen, Figma } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={VSCode} height="35px" />
    </div>
    <div>
      <img src={Figma} height="40px" />
    </div>
    <div>
      <img src={Github} height="35px" />
    </div>
    <div>
      <img src={Git} height="35px" />
    </div>
    <div>
      <img src={Affinity} height="35px" />
    </div>
    <div>
      <img src={Codepen} height="35px" />
    </div>
  </div>
);

export default Brand;

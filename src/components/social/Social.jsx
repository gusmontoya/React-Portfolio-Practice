import React from 'react';
import { VSCode, linkedIn, Github, Git, Affinity, Codepen, Figma } from './imports';
import './social.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <a href="https://www.linkedin.com/in/gusmontoya/" target="_blank" ><img src={linkedIn} height="45px" /></a>
    </div>
    <div>
      <a href="https://github.com/gusmontoya" target="_blank" ><img src={Github} height="45px" /></a>
    </div>
    <div>
      <a href="https://codepen.io/gusmontoya" target="_blank" ><img src={Codepen} height="35px" padding="1rem"/></a>
    </div>
  </div>
);

export default Brand;

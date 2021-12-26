import React from 'react';
import { linkedIn, Github, Codepen } from './imports';
import './social.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <a href="https://www.linkedin.com/in/gusmontoya/" target="_blank" rel="noreferrer" ><img src={linkedIn} height="45px" alt="/" /></a>
    </div>
    <div>
      <a href="https://github.com/gusmontoya" target="_blank" rel="noreferrer" ><img src={Github} height="45px" alt="/" /></a>
    </div>
    <div>
      <a href="https://codepen.io/gusmontoya" target="_blank" rel="noreferrer" ><img src={Codepen} height="35px" padding="1rem" alt="/" /></a>
    </div>
  </div>
);

export default Brand;

import React from 'react';
import { Skill } from '../../components';
import about2Image from '../../assets/144.JPG';
import './about.css';

const About = () => (
  <div className="gpt3__possibility section__margin" id="about">
    <div className="gpt3__possibility-image">
      <img src={about2Image} alt="possibility" border-radius="10px" />
    </div>
    <div className="gpt3__possibility-content">
      <Skill title="About" />
      <h2 className="gradient__text">Who is Gus?</h2>
      <p><span class="bold">I’m a non-traditional tech professional</span>. I am passionate with the evolving tools I use to complete projects that are current to todays demands and technology uses. 
          I'm a self-motivated learner with strong organisation, time management & communication skills. I'm able to work independently & collaboratively in a team with a meticulous attention to detail.
      </p>
      {/* <p>
        I'm flexible in using various tools such as frameworks: bootstrap, nextJS, etc to make front ends. I am developing my skills in expanding my back end knowledge NodeJS, MongoDB, Ruby on Rails etc. 
      </p> */}
      {/* <p>
          Before tech I gave 8 years to healthcare and home health. Adapting to Covids disruption I reskilled myself for a new path and fell in love with full stack development.
          As a follower of Robert Cecil Martin's <a className="anchorLink" href="https://youtu.be/7EmboKQH8lM" target="_blank" rel="noreferrer" aria-label="open link to Clean Code - Uncle Bob."> principles of clean code</a>,
          I agree that reducing complexity as much as possible is important in code.</p>*/}
          {/* updated */}
      <p><span class="bold">I hold a Full Stack Developer Certification from</span> 
          <a className="anchorLink" href="https://www.nucamp.co" target="_blank" rel="noreferrer" aria-label="open link to Nucamp website."> Nucamp Coding Bootcamp</a> <span class="bold">where I became proficient in BootStrap 5, React, React Native, NodeJS, Expres, and MongoDB. </span>.
      </p> 
      {/* <p>
          I'm jubilant as a busy body learning and solving elusive problems on 
          <a className="anchorLink" href="https://scrimba.com/" target="_blank" rel="noreferrer" aria-label="open link to scrimba's website."> scrimba </a>improving my skills daily and being active in the community on
          <a className="anchorLink" href="https://chingu.io/" target="_blank" rel="noreferrer" aria-label="open link to chingu's website."> chingu</a> and other coding oriented discord channels.
      </p> */}
      {/* <h4>Ah yes, I also enjoy a good ride (picture of my beauty on the left) and 3d printing.</h4> */}
    </div>
  </div>
);

export default About;

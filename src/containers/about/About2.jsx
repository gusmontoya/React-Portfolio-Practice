import React from 'react';
import { Skill } from '../../components';
import about2Image from '../../assets/144.JPG';
import './about2.css';

const About2 = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={about2Image} alt="possibility" border-radius="10px" />
    </div>
    <div className="gpt3__possibility-content">
      <Skill title="About" />
      <h1 className="gradient__text">Who is Gus?</h1>
      <p>I'm passionate about  bringing both the technical and visual aspects of digital products to life. 
          User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details. 
          And as a follower of Robert Cecil Martin’s 
          <a className="anchorLink" href="https://youtu.be/7EmboKQH8lM" target="_blank" aria-label="open link to Clean Code - Uncle Bob."> principles of clean code</a>,
          I agree that reducing complexity as much as possible is important.</p>
          <p>I have a <span class="bold">Certificate of Full Stack Developer</span> from 
          <a className="anchorLink" href="https://www.nucamp.co" target="_blank" aria-label="open link to Nucamp website."> Nucamp Coding Bootcamp</a>.
      </p>
      <p>I'm happiest when I'm creating, learning, exploring and thinking about how to make things better. Currently solving deceptively simple problems on 
          <a className="anchorLink" href="https://scrimba.com/" target="_blank" aria-label="open link to scrimba's website."> scrimba </a>improving my skills daily and being active in the community on
          <a className="anchorLink" href="https://chingu.io/" target="_blank" aria-label="open link to chingu's website."> chingu</a> and Discord.
      </p>
      <h4>Ah yes, I also enjoy a good ride and 3d printing. Feel free to reach out and say hello! I promise I don't bite 😉</h4>
    </div>
  </div>
);

export default About2;

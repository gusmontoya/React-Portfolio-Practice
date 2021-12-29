import React from 'react';
import { Skill } from '../../components';
import about2Image from '../../assets/144.JPG';
import './about.css';

const About = () => (
  <div className="gpt3__possibility section__padding" id="about">
    <div className="gpt3__possibility-image">
      <img src={about2Image} alt="possibility" border-radius="10px" />
    </div>
    <div className="gpt3__possibility-content">
      <Skill title="About" />
      <h1 className="gradient__text">Who is Gus?</h1>
      <p>As a life long busy body, before tech I gave 8 years to healthcare and home health. I later started a 3d printing buisness
         for surgeons in my community. Bringing tech and visual aspects of life to help solve problems can be a magical and impactful combination. 
         Adapting to Covids disruption I decided to reskill myself for a new path in my life. Learning full stack development was an unexpected path I fell in love with.
         As a follower of Robert Cecil Martin's <a className="anchorLink" href="https://youtu.be/7EmboKQH8lM" target="_blank" rel="noreferrer" aria-label="open link to Clean Code - Uncle Bob."> principles of clean code</a>,
          I agree that reducing complexity as much as possible is important not only in code but also in product design and life itself.</p>
          <p>I have a <span class="bold">Certificate of Full Stack Developer</span> from 
          <a className="anchorLink" href="https://www.nucamp.co" target="_blank" rel="noreferrer" aria-label="open link to Nucamp website."> Nucamp Coding Bootcamp</a>.
      </p>
      <p>I'm jubilant as a busy body learning, and creating digital content such as useful sites and secure backends. Solving elusive problems on 
          <a className="anchorLink" href="https://scrimba.com/" target="_blank" rel="noreferrer" aria-label="open link to scrimba's website."> scrimba </a>improving my skills daily and being active in the community on
          <a className="anchorLink" href="https://chingu.io/" target="_blank" rel="noreferrer" aria-label="open link to chingu's website."> chingu</a> and other coding oriented discord channels.
      </p>
      <h4>Ah yes, I also enjoy a good ride (picture of my beauty on the left) and 3d printing. Feel more then free to reach out and say Hi!</h4>
    </div>
  </div>
);

export default About;

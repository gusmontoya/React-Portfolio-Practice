import React from 'react';
import logo from '../../assets/geometric_sphere_slowed.gif';
import EmailModal from '../modal/Modal'
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Greetings, I'm Gus! I'm a healthcare worker and scifi fan turned <span>Full Stack Developer!</span></h1>
      <p style={{color: "#104680"}}>Welcome to my portfolio. I hope I gain your interest, feel free to contact me or send constructive feedback.</p>

      <div className="gpt3__header-content__input">
        <EmailModal />
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={logo} alt="loading..." />
    </div>
  </div>
);

export default Header;

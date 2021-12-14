import React from 'react';

import logo from '../../assets/geometric_sphere_slowed.gif';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let me build you something amazing</h1>
      <p>Welcome to my portfolio.I hope I gain your interest or your buisness.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Contact me</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img src={logo} alt="loading..." />
    </div>
  </div>
);

export default Header;

import React from 'react';
import Animation from '../../assets/geometric_sphere_slowed.gif';
import './header.css';
import ModalApp from '../../components/modal/ModalApp';

const Header = () => (

<div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Greetings, I'm Gus! I'm a healthcare worker turned <span>Full Stack Developer!</span></h1>
      <p style={{color: "#104680"}}>Welcome to my portfolio. Please contact me for job openings.</p>
      <div className="gpt3__header-content__input">
        <ModalApp />
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={Animation} alt="gif geometric sphere" />
    </div>
  </div>
);


export default Header;

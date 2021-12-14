import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#skills">Skills</a></p>
            <p><a href="#Projects">Projects</a></p>
          <p><a href="#blog">Blogs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a href="https://drive.google.com/file/d/1klOh517L-hnPQTBHmRRdEyD7Erlr5htw/preview" target="_blank"><button className="btn" type="button">Resume</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#Projects">Projects</a></p>
            <p><a href="#blog">Blogs</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <a href="https://drive.google.com/file/d/1klOh517L-hnPQTBHmRRdEyD7Erlr5htw/preview" target="_blank"><button type="button">Resume</button></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

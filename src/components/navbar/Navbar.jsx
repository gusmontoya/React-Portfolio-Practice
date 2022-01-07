import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { DiGithubBadge } from "react-icons/di";
import { IoDocumentTextSharp } from "react-icons/io5";
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#skills">Skills</a></p>
          <p><a href="#projects">Projects</a></p>
          {/* <p><a href="#blog">Blog</a></p> */}
        </div>
      </div>
      <div className="gpt3__navbar-media">
          <a href="https://github.com/gusmontoya" target="_blank" rel="noreferrer" color="gradient__text"><DiGithubBadge size={50} /></a>
          <a href="https://www.linkedin.com/in/gusmontoya/" target="_blank" rel="noreferrer" ><RiLinkedinBoxLine size={46} /></a>
          <a href="https://drive.google.com/file/d/1xOVm307LnpQG7FAjIG5pRLY9n7GTpdPl/view" target="_blank" rel="noreferrer" ><IoDocumentTextSharp size={35} /></a>
          
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#projects">Projects</a></p>
            {/* <p><a href="#blog">Blog</a></p> */}
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
              <a href="https://github.com/gusmontoya" target="_blank" rel="noreferrer" color="gradient__text"><DiGithubBadge size={50} /></a>
              <a href="https://www.linkedin.com/in/gusmontoya/" target="_blank" rel="noreferrer" ><RiLinkedinBoxLine size={46} /></a>
              <a href="https://drive.google.com/file/d/1klOh517L-hnPQTBHmRRdEyD7Erlr5htw/preview" target="_blank" rel="noreferrer" ><IoDocumentTextSharp size={35} /></a>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

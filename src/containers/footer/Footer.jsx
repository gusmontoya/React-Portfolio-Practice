import React from 'react';
import './footer.css';
import ScrollButton  from "./ScrollButton.js";

// updated

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">“Always be open to ideas, conversation, and topics. Learning to code is learning to create and innovate.” - <span className="author">Danny Thompson</span></h1>
    </div>

    {/* <div className="gpt3__footer-btn">
    <a href="" target="_blank" rel="noreferrer" ><p>Get in touch</p></a>
    </div> */}
    <div className="gpt3__scroll-btn">
    <ScrollButton className="scroll-btn"/>
    </div>
    <div className="gpt3__footer-copyright">
      <p>@2021 Gustavo Montoya. All rights reserved.</p>
    </div>

  </div>
);

export default Footer;

import React from 'react';
import './carousel2demo.scss';

// const slides = [
//   {

//     title: "React Digital Business Card",
//     subtitle: "Scrimba",
//     description: "A code challenge from scrimba, learning to make components in react",
//     image: 
//      "https://github.com/gusmontoya/React_Digital_Buisness_Card/blob/main/src/assets/React%20Digital%20Buisness%20Card%20half.png?raw=true",
//     Demo: "https://modest-pasteur-925609.netlify.app/",
//     Repo: "https://github.com/gusmontoya/React_Digital_Buisness_Card"
//   },
//   {
//     title: "Travel Journal",
//     subtitle: "Scrimba",
//     description: "A code challenge from scrimba, learning to pass props",
//     image: 
//       "https://github.com/gusmontoya/Practice-React-Travel-Journal/blob/main/src/Components/assets/snapshot.png?raw=true",
//     Demo: "https://gifted-goldwasser-84e902.netlify.app/",
//     Repo: "https://github.com/gusmontoya/mini-travel_journal"
//   },
//   {
//     title: "Garrick Yan Realtor site",
//     subtitle: "San Francisco",
//     description: "A mock realtor site for a close friend. ",
//     image:
//       "https://github.com/gusmontoya/Garrick_Yan_Group-Realtor/blob/main/assets/images/search%20page.png?raw=true",
//     Demo: "https://garrick-yan-group-realtor.vercel.app/",
//     Repo: "https://github.com/gusmontoya/Garrick_Yan_Group-Realtor"
//   },
//   {
//     title: "Get out to Nature",
//     subtitle: "California",
//     description: "Encouragement to reach out to nature",
//     image:
//       "https://github.com/gusmontoya/Product-landing-page-FCC/blob/main/images/upper_corner-sm.png?raw=true",
//     Demo: "https://eloquent-goldstine-8169ff.netlify.app/",
//     Repo: "https://github.com/gusmontoya/Product-landing-page-FCC"
//   }
// ];

const swipercards = new Swiper('.blog0slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
})

// var swiper = new Swiper('.blog-slider', {
//   spaceBetween: 30,
//   effect: 'fade',
//   loop: true,
//   mousewheel: {
//     invert: false,
//   },
//   // autoHeight: true,
//   pagination: {
//     el: '.blog-slider__pagination',
//     clickable: true,
//   }
// });



const Carousel2demo = () => (

<div className="blog-slider">
  <div className="blog-slider__wrp swiper-wrapper">

    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img " >
        <img className="animated" src="https://github.com/gusmontoya/Garrick_Yan_Group-Realtor/blob/main/assets/images/search%20page.png?raw=true" alt="" />
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__title">Real Estate Site</div>
        <div className="blog-slider__text">This project was made with React, NextJS, and API </div>
          <a href="https://garrick-yan-group-realtor.vercel.app/" className="blog-slider__button">View Demo</a>
          <a href="https://github.com/gusmontoya/Garrick_Yan_Group-Realtor" className="blog-slider__button">View Github</a>
      </div>
    </div>

     {/* <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src="https://github.com/gusmontoya/Practice-React-Travel-Journal/blob/main/src/Components/assets/snapshot.png?raw=true" alt="" />
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__title">Travel Journal</div>
        <div className="blog-slider__text">This site was made with React, a coding chalange from Scrimba.</div>
          <a href="https://gifted-goldwasser-84e902.netlify.app/" className="blog-slider__button">View Demo</a>
          <a href="https://github.com/gusmontoya/Practice-React-Travel-Journal" className="blog-slider__button">View Github</a>
      </div>
    </div> */}
    {/*
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src="https://github.com/gusmontoya/React_Digital_Buisness_Card/blob/main/src/assets/React%20Digital%20Buisness%20Card.png?raw=true" alt="" />
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__title">Digital Buisness Card</div>
        <div className="blog-slider__text">This project was made with React, from Scrimba as a coding chalange.</div>
          <a href="https://modest-pasteur-925609.netlify.app/" className="blog-slider__button">View Demo</a>
          <a href="https://github.com/gusmontoya/React_Digital_Buisness_Card" className="blog-slider__button">View Github</a>
      </div>
    </div>

    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src="https://github.com/gusmontoya/React_Digital_Buisness_Card/blob/main/src/assets/React%20Digital%20Buisness%20Card.png?raw=true" alt="" />
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__title">Return to Nature</div>
        <div className="blog-slider__text">This project was made with HTML/CSS, from freeCodeCamp as a coding challange.</div>
          <a href="https://eloquent-goldstine-8169ff.netlify.app/" className="blog-slider__button">View Demo</a>
          <a href="https://github.com/gusmontoya/Product-landing-page-FCC" className="blog-slider__button">View Github</a>
      </div>
    </div>   
     */}
  </div>
  <div class="blog-slider__pagination"></div>
</div>

);

export default Carousel2demo;

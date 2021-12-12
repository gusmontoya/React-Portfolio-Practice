import React from 'react';

import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
    </div>
    {/* Brands can be deleted */}
        <Brand />
    {/* Skills - */}
        <WhatGPT3 />
    {/* Apps reference to Hamburger */}
        <Features />
    {/* Delete for now */}
        {/* <Possibility /> */}
    {/* Color band - Click to see resume */}
        <CTA />
    {/* Create some writtings 1) things to consider pre-bootcamp 
    2) youtube videos to resources portfolio reviews 3) Johnson videos 
    4) something else for blog*/}
        <Blog />
    {/* add contact me here in footer */}
        <Footer />
    </div>
);

export default App;

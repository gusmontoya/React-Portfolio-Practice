import React from 'react';

import { About, Footer, Blog, Projects3, Skills, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <About />
        <Skills />
        <Projects3 />
        <Blog />
        <CTA />
        <Footer />
    </div>
);

export default App;

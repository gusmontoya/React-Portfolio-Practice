import React from 'react';

import { Footer, Blog, Projects, Skills, Header, frontEnd } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
            
    </div>
        <Skills />
        <Projects />
         
        <Blog />
        <CTA />
        <Footer />
    </div>
);

export default App;

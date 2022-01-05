import React from 'react';

import { About, Footer, Blog, Projects, Skills, Header } from './containers';
import { Podcast, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Podcast />
        <Footer />
    </div>
);

export default App;

import React from 'react';

import { About, Blog, Footer, Projects, Skills, Header } from './containers';
import { Podcast, Navbar } from './components';

import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg animated">
            <Navbar />
            <Header />
        </div>
        <About />
        <Skills />
        <Projects />
        <Podcast />
        <Blog />
        <Footer />
    </div>
);

export default App;

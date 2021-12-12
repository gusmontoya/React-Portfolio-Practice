import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3" >
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Projects" text="This sections highlights my latest projects. Current projects primarily encompus front end and will expand to back end for a full MERN stack" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">
                The road to success is always under construction.
                </h1>
                <p>Have at it Explore!</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <a href="https://github.com/gusmontoya/Practice-React-CV" target="blank"><Feature title="React CV" text="We so opinion friends me message as delight. Whole front do of plate heard of ought." /></a>
                <a href="https://github.com/gusmontoya/mini-travel_journal" target="blank"> <Feature title="Travel Journal" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own partments b" /></a>
                <a href="https://github.com/gusmontoya/Front-end---trakr" target="blank"><Feature title="Job Application Tracker" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own partments b" /></a>
            </div>
        </div>
    )
}

export default WhatGPT3

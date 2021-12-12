import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Figuring it out can be daunting, <br /> these are resources I've used to stay ontrack.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://learntocodewith.me/podcast/from-frying-chicken-to-working-at-google-danny-thompson/"><Article imgUrl={blog01} date="June 08, 2021" text="From frying chicken to working at Google with Danny Thompson!" /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://www.youtube.com/watch?v=4FeOjYH6CjA&ab_channel=TaylorDesseyn"><Article imgUrl={blog02} date="July 16, 2021" text="Guidance Counselor 2.0 w/Danny Thompson." /></a>
        <a href="https://www.madisonkanna.com/"><Article imgUrl={blog03} date="2021" text="Great resource for beginners. She also has a podcast that I believe has golden nuggets littered everywhere." /></a>
        <a href="https://www.freecodecamp.org/"><Article imgUrl={blog04} date="2021" text="A great free site from beginner to expert."></Article></a>
        <a href="https://scrimba.com"><Article imgUrl={blog05} date="2021" text="Great site to learn for free or paid, I used this to cement React concepts." /></a>
      </div>
    </div>
  </div>
);

export default Blog;

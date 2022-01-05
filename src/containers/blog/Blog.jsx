import React from 'react';
import { Skill } from '../../components';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import Mentor from '../../components/mentor/Mentor';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <Skill title="Blog" />
      <h1 className="gradient__text">Figuring it out can be daunting, <br /> these are resources I've used to stay on track.</h1>
    </div>
    <Mentor />
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <a href="https://learntocodewith.me/podcast/from-frying-chicken-to-working-at-google-danny-thompson/"><Article imgUrl={blog01} title="From frying chicken to working at Google" text="A big man with a bigger heart ! Danny beleives in the team rising together. If one portion of the team needs help with a task, he has no issue jumping in to assist on anything required. He runs the largest meetup group of Developers in the Memphis area and provides resources and support to those that are learning to code." /></a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href="https://www.youtube.com/watch?v=4FeOjYH6CjA&ab_channel=TaylorDesseyn" target="_blank"><Article imgUrl={blog02} title="Guidance Counselor 2.0 w/Danny Thompson." text="If zeal in ones profession were a material element this recruiter would be covered in gold! My daily morning listening regiment." /></a>
        <a href="https://www.madisonkanna.com/" target="_blank"><Article imgUrl={blog03} title="Madison Kanna's guidance rich site" text="Great reading resource for beginners." /></a>
        <a href="https://www.freecodecamp.org/" target="_blank"><Article imgUrl={blog04} title="freeCodeCamp: Learn to code for FREE" text="It does not matter if your starting from scratch or wishing to level up your skills. This resource is available for you at an ultimate low price of FREE!"></Article></a>
        <a href="https://scrimba.com" target="_blank"><Article imgUrl={blog05} title="A new way of learning and it WORKS!" text="Great site to learn for free or paid, I used this to cement React principles and concepts." /></a>
      </div>
    </div>
  </div>
);

export default Blog;

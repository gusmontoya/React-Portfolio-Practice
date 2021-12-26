import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h2 className="gradient__text">{title}</h2>
        <h3>{text}</h3>
      </div>
      <p>Click to view resource </p>
    </div>
  </div>
);

export default Article;

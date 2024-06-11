// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({ posts }) => {
  return (
    <div className="home-container">
      <div>
      <div>
        <h2 className="blog-title">Latest Blogs</h2>
      </div>
      <div>
        <div className='post-btn-setup'>
        <Link to="/post" className="post-button">Post</Link>
        </div>
      </div>
      
      <div className="blog-list">
        {posts.map((post, index) => (
          <div className="blog-item" key={index}>
            <h3 className="blog-item-title">{post.title}</h3>
            <p className='blog-item-content'>{post.content}</p>
            <p className='blog-item-author'>Author: {post.author}</p>
            <Link to={`/post/${index}`} className="edit-button">Edit</Link>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  );
};

export default Home;

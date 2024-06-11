// src/components/Post.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Posts.css"

const Post = ({ addPost, posts }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    if (index !== undefined && posts[index]) {
      const post = posts[index];
      setAuthor(post.author);
      setTitle(post.title);
      setContent(post.content);
    }
  }, [index, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { author, title, content };
    if (index !== undefined) {
      addPost(parseInt(index), newPost); // If editing post, pass index
    } else {
      addPost(newPost); // If adding new post, don't pass index
    }
    alert('Successfully added your post to the home page');
    navigate('/home');
  };

  return (
    <div className="Posts-container">
      <h2 className='Posts-heading'>{index !== undefined ? 'Edit Post' : 'Create New Post'}</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label" htmlFor="author">Author Name:</label>
          <input className="common-input-field" type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="title">Title:</label>
          <input className="common-input-field" type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="content">Content:</label>
          <textarea className="content-input-field" id="content" value={content} onChange={e => setContent(e.target.value)} required />
        </div>
        <button className="Posts-button" type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;

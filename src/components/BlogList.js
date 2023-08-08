// src/components/BlogList.js
import '../stylesheets/BlogList.css';
import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey ='AIzaSyBwcxozQurocQNX8MngOiMhuSZMEQ_JU8s';
        const blogId = '6485727287738269057';
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`
        );
        const data = await response.json();
        console.log(data)
        if (response.ok) {
          setBlogs(data.items);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (error) {
        setError('Error fetching blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Recent Blogs</h1>
      <ul className="blog-items">
        {blogs.map((blog) => (
          <li className="blog-item" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BlogList;

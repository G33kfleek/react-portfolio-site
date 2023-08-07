// src/components/BlogList.js

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
    <div>
      <h1>Recent Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsNewspaper } from 'react-icons/bs';
import './Blog.css';

const Blog = () => {
  const blogs = [
    {
      title: 'The Fireroad Schoolyard',
      img: 'https://i.ibb.co/7RZp6LC/blog1.jpg',
    },
    {
      title: 'Free Your Feet – Free Your Mind',
      img: 'https://i.ibb.co/FnmBxHg/blog2.jpg',
    },
    {
      title: 'On The Horizon',
      img: 'https://i.ibb.co/XyXC39N/blog4.jpg',
    },
  ];

  return (
    <div id="blog">
      <div className="container">
        <h2 className="title">Latest blog</h2>
        <p className="after-title">The freshest and most exciting new</p>
        <div className="blogs-all">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6">
                <div className="card single-blog">
                  <img className="card-img-top" src={blog.img} alt="" />
                  {console.log(blog.img)}
                  <div className="card-body">
                    <small>Bikes</small>
                    <h5 className="card-title">{blog.title}</h5>
                    <NavLink to="">
                      <BsNewspaper /> Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import "./Blog.css";

// a card that links to a blog post
const Blog = props => {
  const Image = props.didLoad ? (
    <img
      src="https://source.unsplash.com/collection/335434/1600x900"
      alt=""
      className="card-img-top"
    />
  ) : (
    <div className="loader">Loading...</div>
  );
  return (
    <div className="col-sm-4 mb-5 d-flex align-items-stretch">
      <div className="card" onClick={props.clickHandler}>
        <div className="card-header">
          <h1>{props.title + " " + props.id.toString()}</h1>
        </div>
        {Image}
        <div className="card-body">
          <p className="card-text">{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

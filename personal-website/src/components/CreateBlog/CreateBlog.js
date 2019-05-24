import React, { Component } from "react";
import "./CreateBlog.css";
import axios from "axios";

class CreateBlog extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
      body: e.target.body.value
    };
    axios.post("/BlogModels", data);
  };
  render() {
    return (
      <form
        className="create-blog mt-5 d-flex flex-column justify-content-start align-items-center"
        onSubmit={this.handleSubmit}
      >
        <input name="title" type="text" placeholder="Title" />
        <input name="description" type="text" placeholder="description" />
        <textarea name="body" />
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}

export default CreateBlog;

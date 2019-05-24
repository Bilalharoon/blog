import React, { Component } from "react";
import axios from "axios";
import "./FullBlog.css";
// a full blog post
class FullBlog extends Component {
  state = {
    body: [],
    title: ""
  };
  async componentDidMount() {
    let result = await axios.get(`/BlogModels/${this.props.match.params.id}`);
    result = result.data;

    const body = result.body.split("\n");
    this.setState({ body: body, title: result.title });
  }

  render() {
    return (
      <div className="main-text">
        <h1 className="mb-5">{this.state.title}</h1>
        {this.state.body.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </div>
    );
  }
}

export default FullBlog;

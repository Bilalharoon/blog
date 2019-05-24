import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

import App from "./App";
import Navbar from "./components/navbar/navbar";
import BlogContainer from "./components/blog/BlogContainer";
import Login from "./components/login/login";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import FullPost from "./components/FullBlog/FullBlog";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/login" component={withRouter(Login)} />
            <Route
              path="/blog-posts/:id"
              component={withRouter(BlogContainer)}
            />
            <Route exact path="/" component={withRouter(App)} />
            <Route path="/create-post" component={withRouter(CreateBlog)} />
            <Route path="/posts/:id" component={withRouter(FullPost)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

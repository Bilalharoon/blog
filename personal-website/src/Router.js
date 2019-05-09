import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import React, { Component } from "react";

import App from "./App";
import Navbar from "./components/navbar/navbar";
import BlogContainer from "./components/blog/BlogContainer";
import Login from "./components/login/login";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route
              path="/blog-posts/:id"
              component={withRouter(BlogContainer)}
            />
            <Route exact path="/" component={withRouter(App)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

import React, { Component } from "react";
import "./login.css";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="Login d-flex justify-content-center align-items-center">
        <div className="login-box d-flex flex-column justify-content-center align-items-center">
          <h1>LOGIN</h1>
          <input
            type="email"
            name="username"
            placeholder="username"
            className="input-field mb-5 mt-5"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import "./login.css";
import axios from "axios";

class Login extends Component {
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="Login d-flex justify-content-center align-items-center">
        <form
          className="login-box d-flex flex-column justify-content-center align-items-center"
          onSubmit={this.submitHandler}
        >
          <h1>LOGIN</h1>
          <input
            type="email"
            name="Username"
            placeholder="Username"
            className="input-field mb-5 mt-5"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
          />

          <input
            type="submit"
            value="SUBMIT"
            className="mt-5 btn btn-primary submit-button"
          />
        </form>
      </div>
    );
  }
}

export default Login;

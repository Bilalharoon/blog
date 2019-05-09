import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  state = {};

  submitHandler = e => {
    e.preventDefault();
    console.log("hello world");
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

          <input
            type="submit"
            value="SUBMIT"
            className="mt-5 btn btn-success submit-button"
          />
        </form>
      </div>
    );
  }
}

export default Login;

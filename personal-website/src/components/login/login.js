import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/ActionTypes";

// TODO: refactor to stateless component
class Login extends Component {
  state = {
    errorMessage: undefined
  };

  submitHandler = async e => {
    e.preventDefault();

    const data = {
      Email: e.target.username.value,
      password: e.target.password.value
    };

    try {
      const token = await axios.post("/Accounts/Login", data);

      console.log(token.data);
      localStorage.setItem("TOKEN", token.data);
      this.props.LogingIn(true);
      this.props.history.push("/blog-posts/0");
    } catch (err) {
      this.setState({
        errorMessage: (
          <p
            style={{
              color: "var(--danger)",
              backgroundColor: "white"
            }}
          >
            THIS IS A BUCKET ... NO WAIT, THERE'S MORE
          </p>
        )
      });
    }
  };

  render() {
    return (
      <div className="Login d-flex justify-content-center align-items-center">
        <form
          className="login-box d-flex flex-column justify-content-center align-items-center"
          onSubmit={this.submitHandler}
        >
          <h1>LOGIN</h1>
          {this.state.errorMessage}
          <input
            type="email"
            name="username"
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

const mapDispatchToProps = dispatch => {
  return {
    LogingIn: isLogingIn =>
      dispatch({ type: ActionTypes.LOGINGIN, payload: isLogingIn })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);

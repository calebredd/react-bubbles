import React from "react";
// import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const Submit = e => {
    e.preventDefault();
    // console.log(e.target.username.value);
    // console.log(e.target.password.value);
    const login = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log(login);
    axiosWithAuth()
      .post("login", login)
      .then(res => {
        // console.log(res);
        // console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        // console.log(localStorage.getItem("token"));
        props.history.push("/BubblePage");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="Login">
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={e => Submit(e)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

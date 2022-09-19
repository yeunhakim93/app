import React, { useState } from "react";

const Login = (props) => {

  const [errMessage, setErrMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    fetch ('api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(object)
    })
    .then (res => {
      if (!res.ok || res.status !== 200) throw new Error(res);
      return res.json();
    })
    .then(data => {
      props.setLoggedIn(data.loggedIn);
      props.setToken(data.token);
    })
    .catch(err => {
      setErrMessage("Please check your id and password.");
    })
  }

  return (<div className="login-container">
    <form className= "login-form" onSubmit={(e) => handleLogin(e)}>
      <input name="username" type="text" placeholder="username" required ></input>
      <input name="password" type="password" placeholder="password" required ></input>
      { errMessage && <p className="error-message">{errMessage}</p> }
      <input type='submit'></input>
    </form>
  </div>)
};

export default Login;

import React, { useState } from "react";
import styles from "./styles/LoginForm.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage('')
    const dataObj = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    const res = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    if (res.ok) {
      console.log("logined");
      setUserName('');
      setPassword('');
      window.location.href = "http://localhost:3000";
    } else {
      setMessage('Login in failed')
    }
  }

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  return (
    <div className="body">
    <div className="container">
      <form className="form" id="login" onSubmit={handleSubmit}>
        <h1 className="form__title">Login</h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Username or email"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            autofocus
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form__input-error-message">{message}</div>
        </div>
        <button className="form__button" type="submit" disabled={!validateForm()}>
          Continue
        </button>
        <p className="form__text">
          <a href="#" className="form__link">
            Forgot your password?
          </a>
        </p>
        <p className="form__text">
          <a className="form__link" href="./siginin" id="linkCreateAccount">
            Don't have an account? Create account
          </a>
        </p>
        <p className="form_back">
          <a href="./" className="backtohome">
            Do you want to back home page?
          </a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;

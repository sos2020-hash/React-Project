import React, { useState } from "react";
import styles from "./styles/LoginForm.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

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
      window.location.href = "http://localhost:3000";
    } else {
      console.log("login failed");
    }
  }

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  return (
    <div class="container">
      <form class="form" id="login" onSubmit={handleSubmit}>
        <h1 class="form__title">Login</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Username or email"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            autofocus
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit" disabled={!validateForm()}>
          Continue
        </button>
        <p class="form__text">
          <a href="#" class="form__link">
            Forgot your password?
          </a>
        </p>
        <p class="form__text">
          <a class="form__link" href="./siginin" id="linkCreateAccount">
            Don't have an account? Create account
          </a>
        </p>
        <p class="form_back">
          <a href="./" class="classbacktohome">
            Do you want to back home page?
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

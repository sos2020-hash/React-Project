import React, { useState } from "react";
import styles from "./styles/LoginForm.css";

const Signin = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setUserName] = useState("");
  const [newPassword, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  function validateForm() {
    return (
      newPassword === repeatPassword &&
      newUserName.length > 0 &&
      newPassword.length > 0
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const dataObj = {
      username: newUserName,
      password: newPassword,
    };
    console.log(dataObj);
    const res = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    if (res.ok) {
      console.log("Welcome!");
      setUsers([...users, dataObj]);
      window.location.href = "http://localhost:3000";
    } else {
      console.log("failed");
    }
  }
  return (
    <div class="container">
      <form class="form form" id="createAccount" onSubmit={handleSubmit}>
        <h1 class="form__title">Create Account</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
          <input
            type="text"
            id="signupUsername"
            class="form__input"
            autofocus
            placeholder="Username"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            autofocus
            placeholder="Email Address"
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
        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            name="Rpassword"
            autofocus
            placeholder="Confirm password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div class="form__input-error-message"></div>
        </div>
        <button class="form__button" type="submit" disabled={!validateForm()}>
          Continue
        </button>

        <p class="form__text">
          <a class="form__link" href="./login" id="linkLogin">
            Already have an account? log in
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

export default Signin;

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
    <div className='body'>
    <div className="container">
      <form className="form form" id="createAccount" onSubmit={handleSubmit}>
        <h1 className="form__title">Create Account</h1>
        <div className="form__message form__message--error"></div>
        <div className="form__input-group">
          <input
            type="text"
            id="signupUsername"
            className="form__input"
            autofocus
            placeholder="Username"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="text"
            className="form__input"
            autofocus
            placeholder="Email Address"
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
          <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
          <input
            type="password"
            className="form__input"
            name="Rpassword"
            autofocus
            placeholder="Confirm password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="form__input-error-message"></div>
        </div>
        <button className="form__button" type="submit" disabled={!validateForm()}>
          Continue
        </button>

        <p className="form__text">
          <a className="form__link" href="./login" id="linkLogin">
            Already have an account? log in
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

export default Signin;

import React from "react";
import styles from "./app.module.css";

const Slogan = () => {
  return (
    <div>
      <form>
        <h1>Want your slogan on our race?</h1>
        <p>Submit your entry here:</p>
        <label>First name</label>
        <input type="text"></input>
        <label>Last name</label>
        <input type="text"></input>
        <label>Email address</label>
        <input type="email"></input>
        <label>Your slogan idea</label>
        <textarea></textarea>
        <p>max 50 characters</p>
        <button>Submit ↑</button>
      </form>
    </div>
  );
};

export default Slogan;

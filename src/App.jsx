import React, { Component } from "react";
import { config } from "./firebase.config";

const firebase = require("firebase");

firebase.initializeApp(config);
class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange(e) {
    if (e.target.id === "txtEmail") this.setState({ email: e.target.value });
    if (e.target.id === "txtPassword")
      this.setState({ password: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Reminder</h1>
        <input
          id="txtEmail"
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <br />
        <input
          id="txtPassword"
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          placeholder="Password"
        />
        <br />
        <button id="btnLogin" onClick={this.logIn}>
          Log in
        </button>
        <button id="btnSingUp" onClick={this.singUp}>
          Sing up
        </button>
        <button id="btnLogout" onClick={this.logOut}>
          Log out
        </button>
      </div>
    );
  }
}

export default App;

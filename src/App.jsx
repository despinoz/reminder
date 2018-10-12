import React, { Component } from "react";
import { config } from "./firebase.config";

const firebase = require("firebase");

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("not loged in");
  }
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.singUp = this.singUp.bind(this);
  }

  handleChange(e) {
    if (e.target.id === "txtEmail") this.setState({ email: e.target.value });
    if (e.target.id === "txtPassword")
      this.setState({ password: e.target.value });
  }

  logIn() {
    // const auth = firebase.auth();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      // .then(() => this.setState({ email: "", password: "" }))
      .catch(e => {
        // if (e.code === "auth/user-not-found") console.log("please sing up");
        // if(e.code )
        console.log(e);
      });
    // this.setState({ email: "", password: "" });
  }

  singUp() {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    );
    promise.catch(e => console.log(e.message));
  }

  logOut() {
    firebase.auth().signOut();
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
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
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

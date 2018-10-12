import React, { Component } from "react";
import { config } from "./firebase.config";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
      <div style={{ textAlign: "center" }}>
        <Typography variant="h1" gutterBottom>
          Reminder
        </Typography>
        <TextField
          id="txtEmail"
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <br />
        <TextField
          id="txtPassword"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <br />
        <Button id="btnLogin" onClick={this.logIn}>
          Log in
        </Button>
        <Button id="btnSingUp" onClick={this.singUp}>
          Sing up
        </Button>
        <Button id="btnLogout" onClick={this.logOut}>
          Log out
        </Button>
      </div>
    );
  }
}

export default App;

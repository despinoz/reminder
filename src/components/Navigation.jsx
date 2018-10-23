import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from "./AuthUserContext";
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to={routes.LANDING} color="inherit">
          Landing
        </Button>
        <Button component={Link} to={routes.HOME} color="inherit">
          Home
        </Button>
        <Button component={Link} to={routes.ACCOUNT} color="inherit">
          Account
        </Button>
        <SignOutButton />
      </Toolbar>
    </AppBar>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to={routes.LANDING} color="inherit">
          Landing
        </Button>
        <Button component={Link} to={routes.SIGN_IN} color="inherit">
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navigation;

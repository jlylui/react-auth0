import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 3)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <div component="main" className={classes.content}>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </>
  );
}

export default App;

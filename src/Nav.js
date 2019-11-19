import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    color: "#fff"
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            React with Auth0
          </Typography>
          <div className={classes.grow} />
          <nav>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/profile" className={classes.link}>
              Profile
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}

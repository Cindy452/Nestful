import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@material-ui/core/link";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  link: {
    "&:hover, &:focus": {
      textDecoration: "none",
    },
  },

  title: {
    flexGrow: 1,
    outline: "none",
  },

  branding: {
    fontFamily: "Alegreya, serif",
  },

  menuLinks: {
    "& span:not(:last-child)": {
      marginRight: "16px",
    },
  },
});

const NavMenuComponent = withStyles(styles)(({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h3"
            className={classes.title}
            color="textSecondary"
          >
            <MaterialLink
              color="inherit"
              className={`${classes.link} ${classes.branding}`}
              component={RouterLink}
              to="/"
            >
              Nestful
            </MaterialLink>
          </Typography>

          <div className={classes.menuLinks}>
            <Typography variant="button" color="textSecondary">
              <MaterialLink
                color="inherit"
                className={classes.link}
                component={RouterLink}
                to="/signin"
              >
                Sign In
              </MaterialLink>
            </Typography>

            <Typography variant="button" color="textSecondary">
              <MaterialLink
                color="inherit"
                className={classes.link}
                component={RouterLink}
                to="/signup"
              >
                Sign Up
              </MaterialLink>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default NavMenuComponent;

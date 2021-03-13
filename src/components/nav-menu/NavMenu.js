import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";

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
          <Typography variant="h3" className={classes.title} color="textSecondary">
            <Link color="inherit" href="/" className={`${classes.link} ${classes.branding}`}>
              Nestful
            </Link>
          </Typography>

          <div className={classes.menuLinks}>
            <Typography variant="button" color="textSecondary">
              <Link color="inherit" className={classes.link} href="/signin">
                Sign In
              </Link>
            </Typography>

            <Typography variant="button" color="textSecondary">
              <Link color="inherit" className={classes.link} href="/signup">
                Sign Up
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default NavMenuComponent;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@material-ui/core/link";
import EggLogo from "../../assets/nestegg.svg";
import { Box } from "@material-ui/core";

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
    display: "flex",
    alignItems: "center",
    outline: "none",
    justifyContent: "space-between",
    marginRight: 250
  },

  logo: {
    display: "flex",
    alignItems: "center",
  },

  branding: {
    fontFamily: "Alegreya, serif",
  },

  menuLinks: {
    "& span:not(:last-child)": {
      marginRight: "16px",
    },
  }
});

const NavMenuComponent = withStyles(styles)(
  ({ classes, currentTitle }) => {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar className={classes.title}>
            <Box className={classes.logo}>
              <img
                src={EggLogo}
                alt="Egg Logo"
                style={{ maxHeight: 80, padding: 10 }}
              />
              <Typography variant="h3" color="textSecondary">
                <MaterialLink
                  color="inherit"
                  className={`${classes.link} ${classes.branding}`}
                  component={RouterLink}
                  to="/"
                >
                  Nestful
                </MaterialLink>
              </Typography>
            </Box>

            <Typography variant="h5" className={classes.status}>
              {currentTitle}
            </Typography>

            <Box></Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
);

export default NavMenuComponent;

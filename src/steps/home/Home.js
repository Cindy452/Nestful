import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./egg.style.scss";

const styles = (theme) => ({
  homeRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  bold: {
    fontWeight: "bold"
  }
});

const Home = withStyles(styles)(({ classes }) => {
  return (
      <div className={classes.homeRoot}>        
        <div className="egg-container">
          <div className="egg">
            <div className="egg-content">
            </div>
          </div>
        </div>

        <Typography variant="h3" color="textPrimary" gutterBottom align="center" className={classes.bold}>
          Retirement Check-In
        </Typography>
        <Typography variant="h4" color="textPrimary" gutterBottom align="center">
          Let's get started with a retirement readiness check. Help us give you
          a personalized experience by providing some basic information about
          yourself.
        </Typography>
      </div>
  );
});

export default Home;

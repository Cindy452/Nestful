import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./egg.style.scss";
import EggLogo from '../../assets/nestegg.svg';

const styles = (theme) => ({
  homeRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  bold: {
    fontWeight: "bold",
  },
});

const Home = withStyles(styles)(({ classes }) => {

  return (
    <div>
      <div className={classes.homeRoot}>
      <img src={EggLogo} alt="Egg Logo" className='egg' />
        </div>

        <Typography
          variant="h3"
          color="textPrimary"
          gutterBottom
          align="center"
          className={classes.bold}
        >
          Retirement Check-In
        </Typography>
        <Typography
          variant="h5"
          color="textPrimary"
          gutterBottom
          align="center"
        >
        Whether you’re planning to retire soon or already retired, it’s a good idea to do a financial health check at regular intervals, to make sure you’re still on track. Use our free Nest Egg Calculator for a quick check on how you’re tracking.

        </Typography>
      </div>
  );
});

export default Home;

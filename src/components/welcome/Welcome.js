import { Typography } from "@material-ui/core";
import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../context/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Growth from "../../assets/Growth.svg";
import BluePrint from "../../assets/Blue Print.svg";
import Startup from "../../assets/Startup.svg";
import BookPen from "../../assets/Bookpen.svg";
import Valuations from "../../assets/Valuations.svg";
import DownloadIcon from "../../assets/download icon.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 600,
    background: "white",
  },

  container: {
    margin: "50px 50px 50px 50px",
  },

  title: {
    fontSize: 20,
  },

  Logo1: {
    width: 100,
    background: "#FFFFFF",
    height: 100,
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    fontWeight: "bold",
    boxShadow: " 0 -3em 3em rgba(0,0,0,0.1)",
    "& img": {
      width: "60%",
      height: "60%",
      margin: "auto auto",
    },
  },
  Logo2: {
    width: 100,
    background: "#54878D",
    height: 100,
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    "& img": {
      width: "60%",
      height: "60%",
      margin: "auto auto",
    },
  },
  Logo3: {
    maxHeight: 80,
  },

  LogoText: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },

  LinkStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
    color: "rgb(17, 75, 95)",
    textDecoration: "none"
  },
});

function Welcome({ setCurrentTitle }) {
  const classes = useStyles();
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/signin");
  }, []);

  setCurrentTitle("");

  return (
    <div className={classes.container}>
      {userData.user ? (
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Welcome to Nestful, {userData.user.displayName}!
        </Typography>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/signin">Sign In</Link>
        </>
      )}
      <Typography variant="h5" style={{ marginTop: "20px" }}>
        Ready to rock retirement? Let's get started.
      </Typography>
      <div style={{ paddingTop: 35, paddingBottom: 35 }}>
        <Typography variant="h4" className={classes.LogoText}>
          <div className={classes.Logo1}>
            <img src={Growth} alt="finances-logo" />
          </div>
          Your Finances
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Planning and monitoring your retirement finances is the first step in
          being able to live your retirement years with confidence, good health
          and purpose.
        </Typography>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            />
            <Grid container spacing={2}>
              <Grid item className={classes.Logo2}>
                <img src={BluePrint} alt="BluePrint-logo" />
              </Grid>
              <Grid item xs={12} sm container>
                <Typography variant="h5" className={classes.LogoText}>
                  Financial Templates
                </Typography>

                <Typography variant="h6">
                  Download Nestful's financial template to budget, track, and
                  project your financial situation in retirement.
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              style={{ cursor: "pointer" }}
              align="right"
            >
              <a
                href="https://docs.google.com/spreadsheets/d/1wCV7ggRgM7fc9fJwSeRfpMm49sl262bUNcDXNRLCYjg/edit?usp=sharing"
                target="blank"
                className={classes.LinkStyle}
              >
                <img
                  src={DownloadIcon}
                  alt="download-icon"
                  className={classes.Logo3}
                />
                Download template
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ paddingTop: 35, paddingBottom: 35 }}>
        <Typography variant="h4" className={classes.LogoText}>
          <div className={classes.Logo1}>
            <img src={Startup} alt="startup-logo" />
          </div>
          Your Retirement Goals
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          A happy retirement is more than just money, it's important to stay
          active, engaged and socially connected to live a healthy and
          fulfilling retirement.
        </Typography>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            />

            <Grid container spacing={2}>
              <Grid item className={classes.Logo2}>
                <img src={BookPen} alt="list-logo" />
              </Grid>
              <Grid item xs={12} sm container>
                <Typography variant="h5" className={classes.LogoText}>
                  Retirement Checklist
                </Typography>

                <Typography variant="h6">
                  Download Nestful's retirement to-do list to help set and
                  achieve your retirement lifestyle goals
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              style={{ cursor: "pointer" }}
              align="right"
            >
              <a
                href="Nestful_Checklist.pdf"
                target="blank"
                className={classes.LinkStyle}
              >
                <img
                  src={DownloadIcon}
                  alt="download-icon"
                  className={classes.Logo3}
                />{" "}
                Download checklist
              </a>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ paddingTop: 35, paddingBottom: 35 }}>
        <Typography variant="h4" className={classes.LogoText}>
          <div className={classes.Logo1}>
            <img src={Valuations} alt="valuations-logo" />
          </div>
          Retirement Check in
        </Typography>
        <Typography
          variant="h5"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Has your financial situation changed? Retake Nestful's Retirement
          Check in questionnaire and see your new results.
        </Typography>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Typography variant="h5" className={classes.LogoText}>
                  Retirement Check in
                </Typography>

                <Typography variant="h6">
                  Get a sneak peak into your retirement status by answering our
                  retirement questionnaire
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              style={{ cursor: "pointer" }}
              align="right"
            >
              <Link to="/" style={{ color: "#114B5F" }}>
                Go to retirement check in
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Welcome;

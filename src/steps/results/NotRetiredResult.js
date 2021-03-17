import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  resultsRoot: {
    flexGrow: 1,
  },

  paper: {
    padding: "16px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    height: "100%",
  },

  question: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },

  grid1: {
    minHeight: 300,
  },
});

const NotRetiredResult = withStyles(styles)(({ classes }) => {
  return (
    <div className="resultsRoot">
      <Grid className={classes.grid1} container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper} color="primary">
            Your results:{" "}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper color="primary">egg view </Paper>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12}>
          <Paper color="primary">
            Get started with Nestful and unlock your step-by-step path to a
            happy and fulfilling retirement.{" "}
           
              <Link to="signup">Sign Up</Link>
    
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom align="center">
        We made some assumptions for you
      </Typography>
    </div>
  );
});

export default NotRetiredResult;

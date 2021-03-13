import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const styles = (theme) => ({
  resultsRoot: {
    flexGrow: 1,
  },

  paper: {
    padding: "16px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary
  },

  question: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },
});

const Results = withStyles(styles)(({ classes }) => {
  return (
    <div className="resultsRoot">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper} color="primary">
            What you will need for retirement:{" "}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} color="primary">
            What you will need to save:{" "}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>$</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>$</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Results</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Results</Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom align="center">
        We made some assumptions for you
      </Typography>

      <Typography variant="h5" gutterBottom align="center">Your current retirement picture</Typography>

      <FormControl>
        <Grid container justify="center" alignItems="center">
          <Grid item md={6}>
            <div className={classes.question}>
              I want my nest egg to be
              <TextField
                autoFocus
                type="text"
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              in retirement.
            </div>
          </Grid>

          <Grid item md={6}>
            <div className={classes.question}>
              I am
              <TextField
                autoFocus
                type="text"
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              years old.
            </div>
          </Grid>

          <Grid item>
            <div className={classes.question}>
              I want to retire when I am
              <TextField
                type="text"
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              years old.
            </div>
          </Grid>

          <Grid item>
            <div className={classes.question}>
              I make
              <TextField
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              per year.
            </div>
          </Grid>

          <Grid item>
            <div className={classes.question}>
              I've saved
              <TextField
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              for retirement.
            </div>
          </Grid>

          <Grid item>
            <div className={classes.question}>
              I plan to save an addtional
              <TextField
                className={`${classes.textField}`}
                color="primary"
                multiline={false}
              />
              per month untill I retire.
            </div>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
});

export default Results;

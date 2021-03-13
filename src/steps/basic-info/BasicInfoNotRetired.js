import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

const styles = (theme) => ({
  textField: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },

  question: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },

  age: {
    maxWidth: "60px",

    "& input": {
      textAlign: "center",
    },
  },
});

const BasicInfoNotRetired = withStyles(styles)(({ classes }) => {
  return (
    <div>
      <Typography variant="h4" color="textPrimary" gutterBottom align="center">
        Are you on track for retirement
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom align="center">
        Please fill in the blanks with your retirement asiprations and current
        financial picture. Don't worry this stays between us
      </Typography>

      
        <FormControl>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <div className={classes.question}>
                I am
                <TextField
                  autoFocus
                  type="text"
                  className={`${classes.textField} ${classes.age}`}
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
                  autoFocus
                  type="text"
                  className={`${classes.textField} ${classes.age}`}
                  color="primary"
                  multiline={false}
                />
                years old
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I make
                <TextField
                  autoFocus
                  type="text"
                  className={classes.textField}
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
                  autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                />
                for retirement
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I plan to save an aditional
                <TextField
                  autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                />
                per month until I retire
              </div>
            </Grid>
          </Grid>
        </FormControl>

    </div>
  );
});

export default BasicInfoNotRetired;

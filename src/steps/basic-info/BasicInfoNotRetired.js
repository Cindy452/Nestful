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
    fontSize: '26px',
    margin: 10,
    fontWeight: "bold",

    "& input": {
      textAlign: "center",
      background: "#54878D",
      color: "white",
      borderRadius: "10px",
    },
  },

  age: {
    maxWidth: "120px",

    "& input": {
      textAlign: "center",
      background: "#54878D",
      color: "white",
      borderRadius: "10px",
    },
  },
});

const BasicInfoNotRetired = withStyles(styles)(({ classes, age, onAgeChanged, retiredAge, onRetiredAgeChanged, income, onIncomeChanged, saved, onSavedChanged, additionalSaving, onAdditionalSavingChanged   }) => {

  const onChangeAge = (e) => {
    onAgeChanged(e.target.value);
  }

  const onRetiredAgeChange = (e) => {
    onRetiredAgeChanged(e.target.value);
  }

  const onIncomeChange = (e) => {
    onIncomeChanged(e.target.value);
  }

  const onSavedChange = (e) => {
    onSavedChanged(e.target.value);
  }

  const onAdditionalSavingChange = (e) => {
    onAdditionalSavingChanged(e.target.value);
  }

 
  return (
    <div>
      <Typography variant="h3" color="textPrimary" gutterBottom align="center" style={{fontWeight: "bold"}}>
        Let's see if you're on track to retire soon
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom align="center">
        Please fill in the blanks to see if you're on track. Don't worry this stays between us
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
                  id="filled-basic" 
                  variant="filled"
                  onChange={onChangeAge}
                  value={age}
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
                  id="filled-basic" 
                  variant="filled" 
                  onChange={onRetiredAgeChange}
                  value={retiredAge}
                />
                years old.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I make $
                <TextField
                  autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                  id="filled-basic" 
                  variant="filled" 
                  onChange={onIncomeChange}
                  value={income}
                />
                per year.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I've saved $
                <TextField
                  autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                  id="filled-basic" 
                  variant="filled" 
                  onChange={onSavedChange}
                  value={saved}
                />
                for retirement.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I plan to save an additional $
                <TextField
                  autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                  id="filled-basic" 
                  variant="filled" 
                  onChange={onAdditionalSavingChange}
                  value={additionalSaving}
                />
                per month until I retire.
              </div>
            </Grid>
          </Grid>
        </FormControl>

    </div>
  );
});

export default BasicInfoNotRetired;

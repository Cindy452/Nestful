import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import { MoneyInput, CustomTextField } from '../../components/CustomInputs';


const styles = (theme) => ({
  question: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px",
    justifyContent: "center",
    whiteSpace: "nowrap",
    fontSize: '26px',
    margin: 10,
    fontWeight: "bold",
  }
});

const BasicInfoNotRetired = withStyles(styles)(({ classes, age, onAgeChanged, retiredAge, onRetiredAgeChanged, income, onIncomeChanged, saved, onSavedChanged, additionalSaving, onAdditionalSavingChanged   }) => {

  const handleAgeChanged = (e) => {
    onAgeChanged(e.target.value);
  };

  const handleRetiredAgeChanged = (e) => {
    onRetiredAgeChanged(e.target.value);
  };

  const handleIncomeChanged = (e) => {
    onIncomeChanged(e.target.value);
  };

  const handleSavedChanged = (e) => {
    onSavedChanged(e.target.value);
  };

  const handleAdditionalSavingChanged = (e) => {
    onAdditionalSavingChanged(e.target.value);
  };

  return (
    <div>
      <Typography variant="h3" color="textPrimary" gutterBottom align="center" style={{fontWeight: "bold"}}>
        Let's see if you're on track to retire soon
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom align="center">
        Please fill in the blanks to see if you're on track. Don't worry this stays between us.
      </Typography>

      
        <FormControl>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <div className={classes.question}>
                I am
                <CustomTextField
                  className={classes.age}
                  onChange={handleAgeChanged}
                  value={age}
                />
                years old.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
              I want to retire when I am
                <CustomTextField
                  className={classes.age}
                  onChange={handleRetiredAgeChanged}
                  value={retiredAge}
                />
                years old.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
                I make <MoneyInput value={income} onChange={handleIncomeChanged} /> per year.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
                I've saved <MoneyInput value={saved} onChange={handleSavedChanged} /> for retirement.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
                I plan to save an additional <MoneyInput value={additionalSaving} onChange={handleAdditionalSavingChanged} /> per month until I retire.
              </div>
            </Grid>
          </Grid>
        </FormControl>

    </div>
  );
});

export default BasicInfoNotRetired;

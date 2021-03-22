import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) => ({

  textField: {
    paddingLeft: "8px",
    paddingRight: "8px"
  },

  question: {
    display: "flex",
    alignItems: "center",
    paddingRight: "4px",
    justifyContent: "center",
    whiteSpace: "nowrap",
    fontSize: 'large',
    margin: 10
  },
});

const BasicInfoRetired = withStyles(styles)(({ 
    classes, 
    monthlySpending, onMonthlySpendingChanged, 
    monthlyPension, onMonthlyPensionChanged, 
    currentNestEgg, onCurrentNestEggChanged }) => {
  
  const handleMonthlySpendingChanged = (e) => {
    onMonthlySpendingChanged(e.target.value);
  }

  const handleMonthlyPensionChanged = (e) => {
    onMonthlyPensionChanged(e.target.value);
  }

  const handleCurrentNestEggChanged = (e) => {
    onCurrentNestEggChanged(e.target.value);
  }
  
  return (
    <div>
      <Typography variant="h4" color="textPrimary" gutterBottom align="center">
       Let's see if your nest egg is still on track
      </Typography>

      <Typography variant="h5" color="textPrimary" gutterBottom align="center">
        Please fill in the fields below to see if you're still on track. Don't worry this stays between us
      </Typography>

     
      <FormControl>
          <Grid container justify="center" alignItems="center">
            <Grid item md={6}>
              <div className={classes.question}>
               I have $
                <TextField
                autoFocus
                  type="text"
                  className={classes.textField}
                  color="primary"
                  multiline={false}
                  id="filled-basic" 
                  variant="filled"
                  value={currentNestEgg}
                  onChange={handleCurrentNestEggChanged}
                />
             in my nest egg.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
                I spend $
                <TextField
                  type="text"
                  className={`${classes.textField}`}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  color="primary"
                  multiline={false}
                  id="filled-basic" 
                  variant="filled"
                  value={monthlySpending}
                  onChange={handleMonthlySpendingChanged}
                />
               per month.
              </div>
            </Grid>

            <Grid item>
              <div className={classes.question}>
                I receive of total of $
                <TextField
                  className={`${classes.textField}`}
                  color="primary"
                  multiline={false}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  id="filled-basic" 
                  variant="filled"
                  value={monthlyPension}
                  onChange={handleMonthlyPensionChanged}
                />
                per month from my company and /or government pensions plans(excluding RRSP withdrawals).
              </div>
            </Grid>
          </Grid>
          </FormControl>

    </div>
  );
});

export default BasicInfoRetired;

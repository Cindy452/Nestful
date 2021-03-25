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
   marginBottom: 20,
    paddingRight: "10px",
    fontSize: '26px',
    marginLeft: 82,
    fontWeight: "bold",
    "& input": {
      textAlign: "center",
      background: "#54878D",
      color: "white",
      borderRadius: "10px",
    },
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
      <Typography variant="h3" color="textPrimary" gutterBottom align="center" style={{fontWeight: "bold"}}>
       Let's see if your nest egg is still on track
      </Typography>

      <Typography variant="h5" color="textPrimary" gutterBottom align="center">
        Please fill in the fields below to see if you're still on track. Don't worry this stays between us
      </Typography>

     
      <FormControl style={{paddingBottom: 25}}>
          <Grid container style={{margin: 20}}>
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

            <Grid item md={6}>
              <div className={classes.question} style={{marginLeft: "auto"}}>
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
                I receive a total of $
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

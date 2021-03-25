import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { MoneyInput } from '../../components/CustomInputs';

const styles = (theme) => ({

  textField: {
    paddingLeft: "8px",
    paddingRight: "8px"
  },

  questions: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  question: {
    fontSize: '24px',
    fontWeight: "600",
    lineHeight: "4em",
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
        Please fill in the fields below to see if you're still on track. Don't worry this stays between us.
      </Typography>
      <div class={classes.questions}>
        <div class={classes.question}>
          I have
          <MoneyInput value={currentNestEgg} onChange={handleCurrentNestEggChanged} />
          in my nest egg. I spend  
          <MoneyInput value={monthlySpending} onChange={handleMonthlySpendingChanged} />
          per month. 
        </div>
        <div class={classes.question}>
          I receive a total of 
          <MoneyInput value={monthlyPension} onChange={handleMonthlyPensionChanged} />
          per month from my company and/or government pensions plans(excluding RRSP withdrawals).
        </div>
      </div>
    </div>
  );
});

export default BasicInfoRetired;

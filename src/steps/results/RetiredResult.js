import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import halfegg from "../../assets/egg.svg";
import onTrack from "../../assets/on-track.svg";
import offTrack from "../../assets/off-track.svg";
import emptyNest from "../../assets/empty-nest.svg";
import { futureValue } from "../../helper";
import Box from "@material-ui/core/Box";
import { MoneyInput, NumericInput } from "../../components/CustomInputs";

const styles = (theme) => ({
  resultsRoot: {
    flexGrow: 1,
    height: 8,
  },

  paper: {
    padding: "16px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    height: 350,
    width: 300,
    backgroundColor: "#114B5F",
  },
  signUpButton: {
    borderRadius: "25px",
    height: "48px",
    width: 240,
    backgroundColor: "#54878D",
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
    marginBottom: 20,
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.5rem",
    padding: 25,
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#114B5F",
    marginTop: -187,
  },

  futureValueWithoutWithdrawal: {
    position: "relative",
    top: -371,
    right: -446,
    fontSize: "2rem",
    fontWeight: "bold",
    width: 300,
  },

  futureValueAfterWithdrawal: {
    position: "relative",
    top: -304,
    right: -446,
    fontSize: "2rem",
    fontWeight: "bold",
    width: 300,
  },

  halfegg: {
    height: 350,
  },

  input: {
    lineHeight: "3em",
  },

  withdrawInput: {
    "&.MuiTextField-root": {
      display: "block",
      width: "310px !important",
      height: "56px",
      margin: 0,
      marginTop: "1em",
      backgroundColor: "white",
      border: "3px solid #54878D",
      fontSize: "24px",
      "& input": {
          fontWeight: "400",
          color: "#54878D",
      },
      "& .MuiInputAdornment-root p": {
          fontSize: "0.75em",
          color: "#54878D",
      },
    }
  },
});

const RetiredResult = withStyles(styles)(
  ({ classes, currentNestEgg, monthlySpending, monthlyPension, onCurrentNestEggChanged,  onMonthlySpendingChanged,    onMonthlyPensionChanged }) => {
    const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(3.0);

    const [yearsOfNesteggLast, setYearsOfNesteggLast] = useState(30);

    const handleMonthlySpendingChanged = (e) => {
      onMonthlySpendingChanged(e.target.value);
    }
  
    const handleMonthlyPensionChanged = (e) => {
      onMonthlyPensionChanged(e.target.value);
    }
  
    const handleCurrentNestEggChanged = (e) => {
      onCurrentNestEggChanged(e.target.value);
    }

    const futureValueAfterWithdrawal = futureValue(
      currentNestEgg,
      (monthlySpending - monthlyPension) * -12,
      expectedRateOfReturn / 100.0,
      yearsOfNesteggLast
    );

    const futureValueWithoutWithdrawal = futureValue(
      currentNestEgg,
      0,
      expectedRateOfReturn / 100.0,
      yearsOfNesteggLast
    );

   

    return (
      <div className="resultsRoot">
        <Grid className={classes.grid1} container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              Your results:
              <Typography gutterBottom align="center" variant="h5">
                {futureValueAfterWithdrawal < 0
                  ? "Your spending is not on track!"
                  : "Your spending is on track!"}
              </Typography>
              <img
                src={futureValueAfterWithdrawal < 0 ? offTrack : onTrack}
                alt="track-logo"
              />
              <Typography
                gutterBottom
                align="center"
                variant="h5"
                style={{ marginTop: -15 }}
              >
                See our assumptions &#x3e;
                <Box p={3} />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <div>
              <img
                src={futureValueAfterWithdrawal < 0 ? emptyNest : halfegg}
                alt="nest-egg"
                className={`${classes.halfegg} ${classes.emptyegg}`}
              />
              <div>
                <Typography className={classes.futureValueWithoutWithdrawal}>
                <NumberFormat value={Math.round(futureValueWithoutWithdrawal)} displayType="text" prefix="$" thousandSeparator=" " />
                  <Typography variant="h5">
                    Your nest egg value after {yearsOfNesteggLast} years with no withdrawals
                  </Typography>
                </Typography>

                <Typography className={classes.futureValueAfterWithdrawal}>
                  <NumberFormat style={{color: futureValueAfterWithdrawal < 0 ? "#F45B69" : "inherit"}} value={Math.round(futureValueAfterWithdrawal)} displayType="text" prefix="$" thousandSeparator=" " />
                  <Typography variant="h5">
                    What you'll have left after withdrawing <NumberFormat 
                      value={monthlySpending-monthlyPension} 
                      displayType="text"
                      thousandSeparator=" "
                      prefix="$"
                    /> per month for{" "}
                    {yearsOfNesteggLast} years.
                  </Typography>
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.buttonContainer}>
              {futureValueAfterWithdrawal < 0
                ? "Sign up with Nestful to get your retirement finances back on track and live your retirement dreams! "
                : " Get started with Nestful and unlock your step-by-step path to a happy and fulfilling retirement."}

              <Button
                className={classes.signUpButton}
                component={Link}
                to="/signup"
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid className={classes.grid1} container spacing={10}>
          <Grid item xs={5}>
            <Typography variant="h4" gutterBottom align="left">
              We made some assumptions for you
            </Typography>
            <Typography variant="h5" gutterBottom align="left">
              We made some assumptions about your situation but you can adjust
              them to see how they'll affect your results
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5" gutterBottom align="left">
              Current monthly retirement nest egg withdrawals (RRSP, TFSA, other
              savings).
              <MoneyInput
                disabled
                className={classes.withdrawInput}
                onChange={()=>{}}
                value={monthlySpending - monthlyPension}
              />
            </Typography>
            <div className={classes.margin} />
            <div>
              <h1>Average Annual Return</h1>
              <NumericInput
                value={expectedRateOfReturn}
                onValueChanged={(newAnnualReturn) =>
                  setExpectedRateOfReturn(newAnnualReturn)
                }
              />
              <p>
                What do you expect your annual return on your retirement savings
                to be?
              </p>
              <h1>Years Nest Egg Should Last</h1>
              <NumericInput
                value={yearsOfNesteggLast}
                onValueChanged={(newYearsOfNesteggLast) =>
                  setYearsOfNesteggLast(newYearsOfNesteggLast)
                }
              />
            </div>
          </Grid>
        </Grid>
        <Divider style={{ margin: 20 }} />
        <Grid className={classes.grid1} container spacing={10}>
          <Grid item xs={5}>
            <Typography gutterBottom align="left" variant="h4">
              Here's what you told us.
            </Typography>
            <Typography gutterBottom align="left" variant="h5">
              You can adjust your responses to see how they'll affect your
              results.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography
              gutterBottom
              align="left"
              variant="h5"
              className={classes.input}
            >
              I have
              <MoneyInput
                value={currentNestEgg}
                onChange={handleCurrentNestEggChanged}
              />
              in my nestegg. I spend 
              <MoneyInput
                value={monthlySpending} 
                onChange={handleMonthlySpendingChanged}
              /> per
              month.
            </Typography>
            <Typography
              gutterBottom
              align="left"
              variant="h5"
              className={classes.input}
            >
              I receive of total of
              <MoneyInput
                value={monthlyPension}
                onChange={handleMonthlyPensionChanged} 
              /> per month from my company and /or government pensions plans(excluding
              RRSP withdrawals).
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default RetiredResult;

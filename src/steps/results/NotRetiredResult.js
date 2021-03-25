import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import halfEgg from "../../assets/egg.svg";
import fullEgg from "../../assets/full_egg.svg";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import NumericInput from "../../components/NumericInput";
import { futureValue } from "../../helper";
import Box from '@material-ui/core/Box';

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

  signUpButton: {
    borderRadius: "25px",
    height: "48px",
    width: 240,
    backgroundColor: "#54878D",
  },

  egg: {
    height: 350,
  },

  input: {
    lineHeight: 3,
    justifyContent: "center",
    "& input": {
      textAlign: "center",
      background: "#54878D",
      color: "white",
      borderRadius: "10px",
    },
  },
  numbers: {
    color: "#F45B69",
    paddingRight: 8,
    paddingLeft: 8,
  },
  resultContainer: {
    height: "100%",
  },

  recommendedNestEgg: {
    position: "relative",
    top: -371,
    right: -446,
    fontSize: "2rem",
    fontWeight: "bold",
    width: 300,
  },

  estimatedNestEgg: {
    position: "relative",
    top: -304,
    right: -446,
    fontSize: "2rem",
    fontWeight: "bold",
    width: 300,
  },

  incomeInput: {
    background: "#54878D",
    borderRadius: "10px",

    "& div": {
      "& input": {
        color: "white",
        fontSize: 20,
        marginTop: -20,
        width: 125
      },
    },
  },
});

const PrettoSlider = withStyles({
  root: {
    color: "#114B5F",
    height: 8,
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: "#54878D",
    border: "3px solid white",
    marginTop: -12,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const NotRetiredResult = withStyles(styles)(
  ({
    classes,
    age,
    onAgeChanged,
    retiredAge,
    onRetiredAgeChanged,
    income,
    onIncomeChanged,
    saved,
    onSavedChanged,
    additionalSaving,
    onAdditionalSavingChanged,
  }) => {
    const [retirementIncome, setRetirementIncome] = useState(income * 0.7);
    const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(5.0);
    const [lifeExpectancy, setLifeExpectancy] = useState(95);

    const currentIncome = isNaN(parseInt(income)) ? 0 : parseInt(income);

    const handleSliderChange = (e, newPercentage) => {
      setRetirementIncome(
        Math.round(parseInt(newPercentage) * currentIncome) / 100.0
      );
    };
    const handleretirementIncomeChanged = (e) => {
      if (isNaN(parseInt(e.target.value))) {
        setRetirementIncome(0);
      } else {
        setRetirementIncome(parseInt(e.target.value));
      }
    };
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

    // FV = PV * (1 + ROR) ^ t
    // FVp = PVp * ((1 + ROR) ^ t - 1) / ROR
    // TOTAL = FV + FVp

    // PV = saved
    // PVp = additionalSaving * 12
    // ROR = expectedRateOfReturn
    // t =

    const recommendedNestEgg = (lifeExpectancy - retiredAge) * retirementIncome;

    const estimatedNestEgg = futureValue(
      saved,
      additionalSaving * 12,
      expectedRateOfReturn / 100.0,
      retiredAge - age
    );
    // const futureValue = () => {
    //  let intialDeposit;
    //  let paymentPerPeriod;
    //  let annualInterestRate;
    //  let numCompoundsPerPeriod;
    //  let numOfPeriodsInvested;

    //  let futureValueIntitialDeposit = intialDeposit * Math.pow(1 + annualInterestRate, numOfPeriodsInvested);

    //  let futureValuePayments = paymentPerPeriod *
    //  ((Math.pow(1 + annualInterestRate/numCompoundsPerPeriod, numCompoundsPerPeriod*numOfPeriodsInvested) - 1) / (annualInterestRate/numCompoundsPerPeriod))

    //  let totalFutureValue = futureValueIntitialDeposit + futureValuePayments;

    //  return totalFutureValue;
    // }
    return (
      <div className="resultsRoot">
        <Grid className={classes.grid1} container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container className={classes.resultContainer}>
                <Grid item>
                  <Typography utterBottom align="left" variant="h4">
                    Your results:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom align="left" variant="h6">
                    We recommend that you have
                    <span className={classes.numbers}>
                      ${recommendedNestEgg}
                    </span>
                    saved for retirement.
                  </Typography>
                </Grid>
                <Grid item>
                  {estimatedNestEgg <= recommendedNestEgg ? (
                    <Typography gutterBottom align="left" variant="h6">
                      It looks like you will need to save additional
                      <span className={classes.numbers}>
                        ${Math.round(recommendedNestEgg - estimatedNestEgg)}
                      </span>
                    </Typography>
                  ) : (
                    <Typography gutterBottom align="left" variant="h6">
                      Great, You're on track!
                    </Typography>
                  )}
                </Grid>
              </Grid>

              <Typography
                gutterBottom
                align="center"
                variant="h6"
                style={{ marginTop: -15 }}
              >
                See our assumptions &#x3e;
                <Box p={3} />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item>
                <div>
                  <img
                    src={
                      estimatedNestEgg >= recommendedNestEgg ? fullEgg : halfEgg
                    }
                    alt="egg"
                    className={classes.egg}
                  />
                  <div>
                    <Typography className={classes.recommendedNestEgg}>
                      ${recommendedNestEgg}
                      <Typography variant="h5">
                        What you will need for retirement
                      </Typography>
                    </Typography>

                    <Typography className={classes.estimatedNestEgg}>
                      ${Math.round(estimatedNestEgg)}
                      <Typography variant="h5">
                        What you will have for retirement
                      </Typography>
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.buttonContainer}>
              Get started with Nestful and unlock your step-by-step path to a
              happy and fulfilling retirement.
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
              We made some assumptions to give you our recommended nest egg size
              but you can adjust them to see how they'll affect your results
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5" gutterBottom align="left">
              I want my income to be ${" "}
              <TextField
                id="filled-basic"
                variant="filled"
                className={classes.incomeInput}
                value={retirementIncome}
                onChange={handleretirementIncomeChanged}
              />
              {" "}in retirement
            </Typography>
            <div className={classes.margin} />
            <PrettoSlider
              value={(100.0 * retirementIncome) / income}
              onChange={handleSliderChange}
            />
            <Typography gutterBottom>
              {currentIncome === 0
                ? `$${retirementIncome} more than current income`
                : `${Math.round(
                    (100.0 * retirementIncome) / currentIncome
                  )}% of current income`}
            </Typography>
            <Typography gutterBottom>
              Having 70% of your current annual income in retirement is a
              general rule of thumb.
            </Typography>

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
              <h1>Life expectancy</h1>
              <NumericInput
                value={lifeExpectancy}
                onValueChanged={(newLifeExpectancy) =>
                  setLifeExpectancy(newLifeExpectancy)
                }
              />
              <p>
                A life expectancy of 95 years is a common financially
                conservative estimate for Canadians
              </p>
            </div>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />
        <Grid className={classes.grid1} container spacing={10}>
          <Grid item xs={5}>
            <Typography
              gutterBottom
              align="left"
              variant="h4"
              style={{ fontWeight: "bold" }}
            >
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
              I am{" "}
              <TextField
                variant="filled"
                className={classes.textField}
                value={age}
                onChange={handleAgeChanged}
              />{" "}
              years old.I want to retire when I am
              <TextField
                variant="filled"
                value={retiredAge}
                onChange={handleRetiredAgeChanged}
              />{" "}
              years old.
            </Typography>
            <Typography
              gutterBottom
              align="left"
              variant="h5"
              className={classes.input}
            >
              I make $
              <TextField
                variant="filled"
                value={income}
                onChange={handleIncomeChanged}
              />{" "}
              per year. I've saved $
              <TextField
                variant="filled"
                value={saved}
                onChange={handleSavedChanged}
              />{" "}
              for retirement.
            </Typography>
            <Typography
              gutterBottom
              align="left"
              variant="h5"
              className={classes.input}
            >
              I plan to save an additional $
              <TextField
                variant="filled"
                value={additionalSaving}
                onChange={handleAdditionalSavingChanged}
              />{" "}
              per month until I retire.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default NotRetiredResult;

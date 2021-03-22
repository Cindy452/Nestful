import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Logo from "../../assets/full_egg.svg";
import Slider from "@material-ui/core/Slider";
import Counter from "../../components/Counter";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  resultsRoot: {
    flexGrow: 1,
    height: 8
  },

  paper: {
    padding: "16px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    height: 350,
    width: 300,
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
    margin: 20,
  },

  button: {
    height: 100,
    fontSize: "1.5rem",
    padding: 25,
    borderRadius: 10,
    color: "#fff"
  },

  egg: {
    height: 400,
  },

  input: {
    lineHeight: 3,
    justifyContent: 'center'
  }
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

const RetiredResult = withStyles(styles)(
  ({ classes, currentNestEgg, monthlySpending, monthlyPension }) => {
    const [
      retirementIncomePercentage,
      setRetirementIncomePercentage,
    ] = useState(70);

    const handleSliderChange = (e, NewRetirementIncomePercentage) => {
      setRetirementIncomePercentage(parseInt(NewRetirementIncomePercentage));
    };

    const handleInputChange = (e) => {
      setRetirementIncomePercentage(e.target.retirementIncomePercentage === '' ? '' : Number(e.target.retirementIncomePercentage));
    };

    return (
      <div className="resultsRoot">
        <Grid className={classes.grid1} container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              Your results:{" "}
              <Typography gutterBottom align="center">
                Your spending is on track!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <img src={Logo} alt="full-egg" className={classes.egg} />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.button}>
              Get started with Nestful and unlock your step-by-step path to a
              happy and fulfilling retirement.
              <Button
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
              We made some assumptions about your situation 
              but you can adjust them to see how they'll affect your results
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4" gutterBottom align="left">
              I currently withdraw $
              <TextField
                id="filled-basic"
                variant="filled"
                defaultValue="3000"
              />
              per month from my nest egg(RRSP, TFSA, etc.) 
            </Typography>
            <div className={classes.margin} />
            <PrettoSlider
              retirementIncomePercentage={typeof `${retirementIncomePercentage}%` === '70' ? retirementIncomePercentage : 0}
              onChange={handleSliderChange}
              defaultValue='70'
            />
            <Typography gutterBottom
               onChange={handleInputChange}
            >{`${retirementIncomePercentage}%`}of current saving
            </Typography>
            <Counter />
          </Grid>
        </Grid>
        <Divider />
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
            <Typography gutterBottom align="left" variant="h5" className={classes.input}>
            I have ${" "}
              <TextField
                variant="filled"
                defaultValue={currentNestEgg}
                className={classes.textField}
              />{" "}
             in my nestegg.   I spend ${" "}
              <TextField variant="filled" defaultValue={monthlySpending} />  per month.
            </Typography>
            <Typography gutterBottom align="left" variant="h5" className={classes.input}>
            I receive of total of $ <TextField variant="filled" defaultValue={monthlyPension} />     per month from my company and /or government pensions plans(excluding RRSP withdrawals).
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default RetiredResult;

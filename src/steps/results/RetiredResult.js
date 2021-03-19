import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Logo from "../../assets/egg.svg";
import Slider from "@material-ui/core/Slider";
import Counter from '../../components/Counter';
import Button from '@material-ui/core/Button';



const styles = (theme) => ({
  resultsRoot: {
    flexGrow: 1,
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
    color: '#fff'
  },

  egg: {
    height: 350,
   },

});

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 20,
    label: "20%",
  },
  {
    value: 37,
    label: "37%",
  },
  {
    value: 100,
    label: "100%",
  },
];

function valuetext(value) {
  return `${value}%`;
}

const RetiredResult = withStyles(styles)(({ classes }) => {
  return (
    <div className="resultsRoot">
      <Grid className={classes.grid1} container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Your results:{" "}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <img src={Logo} alt="egg" className={classes.egg} />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.button}>
            Get started with Nestful and unlock your step-by-step path to a
            happy and fulfilling retirement.
            <Button component={ Link } to="/signup" variant="contained" color="secondary">
            Sign Up</Button>
          </Paper>
        </Grid>
      </Grid> 
      <Grid className={classes.grid1} container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom align="left">
            We made some assumptions for you
          </Typography>
          <Typography variant="h5" gutterBottom align="left">
            We made some assumptions to give you our recommended nest egg size
            but you can adjust them to see how they'll affecct your results
          </Typography>
        </Grid>
         <Grid item xs={6}>
          <Typography variant="h4" gutterBottom align="left">
            I want my income to be
          </Typography>
          <TextField id="filled-basic" variant="filled" />
          <Typography variant="h4" gutterBottom align="left">
            in retirement
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks={marks}
          />
            <Counter />
        </Grid>
      </Grid>
    </div>
  );
});

export default RetiredResult;

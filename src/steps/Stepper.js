import React, { useState, useMemo } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Journey from "./journey/Journey";
import NotRetiredResult from "./results/NotRetiredResult";
import RetiredResult from "./results/RetiredResult";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Home from "./home/Home";
import BasicInfoRetired from "./basic-info/BasicInfoRetired";
import BasicInfoNotRetired from "./basic-info/BasicInfoNotRetired";
import Fab from "@material-ui/core/Fab";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    height: "calc(100vh - 64px)",
  },

  buttonGrid: {
    fontSize: "24px",
    margin: "0 auto",
    marginTop: "3em",
    padding: "20px",
    maxWidth: "840px",
  },

  previous: {
    height: "48px",
    width: "48px",
    float: "left",
  },

  continue: {
    display: "block",
    borderRadius: "200px",
    height: "72px",
    width: "100%",
    margin: "0 auto",
    "& span": {
      textTransform: "none",
      fontWeight: "500",
      fontSize: "24px",
    }
  },
});

const Stepper = withStyles(styles)(({ classes, setCurrentTitle }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Home", "Choose your journey", "Basic Info"];

  const [isRetired, setIsRetired] = useState(null);
  const [age, setAge] = useState(null);
  const [retiredAge, setRetiredAge] = useState(null);
  const [income, setIncome] = useState(null);
  const [saved, setSaved] = useState("");
  const [additionalSaving, setAdditionalSaving] = useState("");

  const [currentNestEgg, setCurrentNestEgg] = useState(null);
  const [monthlyPension, setMonthlyPension] = useState(null);
  const [monthlySpending, setMonthlySpending] = useState(null);


  useMemo(() => { 
    if(activeStep > 0 && activeStep < 3) {
      setCurrentTitle(`Check In: Step ${activeStep} of ${steps.length}`);
    } else if(activeStep === 3) {
      setCurrentTitle('Check In Complete!')
    }
   else {
      setCurrentTitle('');
    }
   
  }, [activeStep, setCurrentTitle, steps.length]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Home  />;
      case 1:
        return (
          <Journey handleSelection={handleSelection} isRetired={isRetired} />
        );
      case 2:
        return isRetired 
        ? <BasicInfoRetired
            monthlyPension={monthlyPension}
            onMonthlyPensionChanged={setMonthlyPension}
            monthlySpending={monthlySpending}
            onMonthlySpendingChanged={setMonthlySpending}
            currentNestEgg={currentNestEgg}
            onCurrentNestEggChanged={setCurrentNestEgg}
         /> 
        : <BasicInfoNotRetired 
            age={age} 
            onAgeChanged={setAge} 
            retiredAge={retiredAge} 
            onRetiredAgeChanged={setRetiredAge}
            income={income}
            onIncomeChanged={setIncome}
            saved={saved}
            onSavedChanged={setSaved}
            additionalSaving={additionalSaving}
            onAdditionalSavingChanged={setAdditionalSaving}
          />;
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSelection = (isRetired) => {
    setIsRetired(isRetired);
  };

  return (
    <Container className={classes.container}>
      {activeStep === steps.length ? (
        <Box className="step">
          {isRetired ?
           <RetiredResult  
            currentNestEgg={currentNestEgg}
            monthlySpending={monthlySpending}
            monthlyPension={monthlyPension}
            onCurrentNestEggChanged={setCurrentNestEgg}
            onMonthlySpendingChanged={setMonthlySpending}
            onMonthlyPensionChanged={setMonthlyPension}
           /> : 
           <NotRetiredResult
            age={age} 
            onAgeChanged={setAge} 
            retiredAge={retiredAge} 
            onRetiredAgeChanged={setRetiredAge}
            income={income}
            onIncomeChanged={setIncome}
            saved={saved}
            onSavedChanged={setSaved}
            additionalSaving={additionalSaving}
            onAdditionalSavingChanged={setAdditionalSaving}
           />}
        </Box>
      ) : (
        <Box className="step">
          {getStepContent(activeStep)}

          <Grid
            className={classes.buttonGrid}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={3}>
              {activeStep !== 0 && 
                <Fab
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  color="primary"
                  className={classes.previous}
                >
                  <ArrowBackIcon />
                </Fab>
              }
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                disabled={activeStep === 1 && isRetired === null}
                onClick={handleNext}
                className={classes.continue}
              >
                <Typography variant="button" color="textSecondary">
                  {activeStep === 0
                    ? "Let's get started"
                    : steps.length - 1
                    ? "Continue"
                    : "Finished"}
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
});

export default Stepper;

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
    padding: "20px",
  },

  previous: {
    height: "48px",
    width: "48px",
  },

  continue: {
    borderRadius: "25px",
    height: "48px",
    width: "100%",
  },
});

const Stepper = withStyles(styles)(({ classes, setCurrentTitle }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Home", "Choose your journey", "Basic Info"];

  const [isRetired, setIsRetired] = useState(null);

  useMemo(() => { 
    if(activeStep > 0) {
      setCurrentTitle(`Check In: Step ${activeStep} of ${steps.length}`);
    }else {
      setCurrentTitle('');
    }
   
  }, [activeStep]);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Home  />;
      case 1:
        return (
          <Journey handleSelection={handleSelection} isRetired={isRetired} />
        );
      case 2:
        return isRetired ? <BasicInfoRetired /> : <BasicInfoNotRetired />;
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
          {isRetired ? <RetiredResult /> : <NotRetiredResult />}
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
            <Grid item xs={3} hidden={activeStep === 0}>
              <Fab
                disabled={activeStep === 0}
                onClick={handleBack}
                color="primary"
                className={classes.previous}
              >
                <ArrowBackIcon />
              </Fab>
            </Grid>
            <Grid item xs={activeStep === 0 ? 8 : 6}>
              <Button
                variant="contained"
                color="primary"
                size="large"
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
            <Grid item xs={3} hidden={activeStep === 0}></Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
});

export default Stepper;

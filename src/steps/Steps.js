import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Journey from "../components/journey/Journey";
import Checklist from "../components/checklist/Checklist";
import Results from "../components/Results";
import "./styles.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function getSteps() {
  return ["Choose your journey", "Finish checklist", "Results"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Journey />;
    case 1:
      return <Checklist />;
    case 2:
      return <Results />;
    default:
      return "Unknown stepIndex";
  }
}

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="steps">
        {activeStep === steps.length ? (
          <div>
            <Typography component="span">All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography component="span">
              <div className="step-outlet">
                  {getStepContent(activeStep)}
              </div>
                
              </Typography>
              <div className="button-container">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  color="primary"
                  className="previous"
                >
                 <ArrowBackIcon />
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleNext}
                  className="continue"
                >
                  <span>
                    {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                  </span>
                </Button>
                <div className='spacer'></div>
              </div>
            </div>
          )}

    </div>
  );
}

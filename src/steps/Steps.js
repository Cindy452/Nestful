import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Journey from "../components/journey/Journey";
import NotRetireChecklist from '../components/near-retire/checklist/NotRetireChecklist';
import RetiredChecklist from '../components/retired/checklist/RetiredChecklist';
import Results from "../components/results/Results";
import "./styles.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Home from '../components/home/Home';

function getSteps() {
  return ["Choose your journey", "Finish checklist", "Results"];
}

function getStepContent(step) {
  switch (step) {
    case 0: 
    return <Home />
    case 1:
      return <Journey />;
    case 2:
      return <NotRetireChecklist />;
      case 3:
        return <RetiredChecklist />;
    case 4:
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

  return (
    <div className="steps">
        {activeStep === steps.length ? (
          <div>
            <Typography component="span" href=''>All steps completed</Typography>
            <Button href='/home'>Dashboard</Button>
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
                    {activeStep === 0 ? "Let's get started" : steps.length - 1 ? "Continue" : "Finished" }
                  </span>
                </Button>
                <div className='spacer'></div>
              </div>
            </div>
          )}

    </div>
  );
}

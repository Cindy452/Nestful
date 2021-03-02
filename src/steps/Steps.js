import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Journey from '../components/journey/Journey';
import Checklist from '../components/checklist/Checklist';
import Results from '../components/Results';
import './styles.scss';



function getSteps() {
  return ['Choose your journey', 'Finish checklist', 'Results'];
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
      return 'Unknown stepIndex';
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
    <div className='steps'>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component="span">All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography component="span">{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React, {useState} from 'react';
import {
  Step, StepLabel,
  Stepper, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  active: {
    transform: 'scale(1.1)',
    transition: 'transform .3s',
    '& svg': {
      color: 'black !important;',
      transition: 'color .3s'
    },
    '& .label': {
      fontWeight: '800 !important',
      transition: 'font-weight .3s'
    }
  }
}))

const StepProgressSummary = (props) => {
  const { steps, onClickStepCallback, initialActiveIndex } = props;
  const [activeStep, setActiveStep] = useState(initialActiveIndex);

  const classes = useStyles();

  const handleStepClick = (selectedIndex, cb) => {
    if(selectedIndex !== activeStep) {
      setActiveStep(selectedIndex);
      cb && cb(selectedIndex);
    }
  }

  return (
    <Stepper>
      {
        steps.map((step, index) => (
          <Step
            className={activeStep === index && classes.active}
            onClick={() => handleStepClick(index, onClickStepCallback)}
            active={activeStep === index}
            completed={step.choice}>
            {
              (activeStep === index &&
                <StepLabel><strong>{(step && ((step.choice && `${step.choice.name} (${step.title})`) || `Choose ${step.title}`)) || `Step ${index}`}</strong></StepLabel>) ||
              <StepLabel>{(step && ((step.choice && `${step.choice.name} (${step.title})`) || `${step.title}`)) || `Step ${index}`}</StepLabel>
            }

          </Step>
        ))
      }
    </Stepper>
  );
}

export default StepProgressSummary;
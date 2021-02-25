import React from 'react';
import useStyles from './checklist.style';
import TextField from '@material-ui/core/TextField';
import { FormGroup } from '@material-ui/core';


export default function Checklist() {
  const classes = useStyles();

  return (
    <FormGroup className={classes.container} noValidate>
     <label>Select your desired retirement date</label>
      <TextField
        id="date"
        type="date"
        defaultValue="2021-01-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    
      <label>Enter how much money you currently make per year: </label>
       <input type="number" id="annual-income" name="annual-income" />
     <label>Enter how much money you have saved for retirement to date: </label>
      <input type="number" id="saving" name="saving" /> 
 </FormGroup>
  );
}





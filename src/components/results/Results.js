import React from 'react';
import './results.style.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

export default function Results() {
  
  return (
    <div className='root'>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className='paper'>What you will need for retirement: </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='paper'>What you will need to save: </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='paper'>$</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='paper'>$</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='paper'>Results</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className='paper'>Results</Paper>
        </Grid>
      </Grid>
      <Typography>We made some assumptions for you</Typography>
      <div>
        <span>
          I want my nest egg to be
          <span className="currencyinput" >
          <Input type="number" className="year" />
          </span>
          in retirement.
         </span>
      </div>
      <div>
      <Typography>Your current retirement picture</Typography>
        <span>
          I am
          <span className="currencyinput" >
            <Input type="text" name="currency"  />
          </span>
          years old. I want to retire when I am 
          <span className="currencyinput" >
            <Input />
          </span> years old. I make 
          <span className="currencyinput" >
            <Input type="number" name="currency" defaultValue="$" />
          </span> per year.
          I've saved 
          <span className="currencyinput" >
            <Input type="number" name="currency" defaultValue="$" />
          </span>
          for retirement. I plan to save an addtional 
          <span className="currencyinput" >
            <Input type="number" name="currency" defaultValue="$" />
          </span>
          per month untill I retire.
        </span>
      </div>
    </div>
  );
}

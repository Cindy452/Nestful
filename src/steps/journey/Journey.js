import DescriptiveButton from "../../components/shared/descriptive-button/DescriptiveButton";
import Logo2 from "../../assets/undraw_Progress_overview.svg";
import Logo1 from "../../assets/undraw_To_do_list.svg";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React from 'react';

const styles = (theme) => ({
  
});



const Journey = withStyles(styles)(({ classes, handleSelection}) =>{
  return (
    <div className="journey">
      <Typography variant="h4" color="textPrimary" gutterBottom align="center">
        First, tell us where you are on the retirement journey
      </Typography>

      <Grid
        className="button-grid"
        container
        direction="row"
        justify="space-evenly"
        alignItems="center" 
      >
        <Grid item>
          <DescriptiveButton
         onClick={() => {handleSelection(false) }}  
          
            className="descriptive-button"
            icon={Logo1}
            label="Not Yet Retired"
            description="You need help planing your nest egg."
          />
        </Grid>

        <Grid item  >
          <DescriptiveButton
            onClick={() =>  {handleSelection(true)}}
            className="descriptive-button"
            icon={Logo2}
            label="Retired"
            description="You need help tracking your nest egg." />
           </Grid>
      </Grid>
    </div>
  );
});

export default Journey;

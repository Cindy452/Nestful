import DescriptiveButton from "../../components/shared/descriptive-button/DescriptiveButton";
import Logo2 from "../../assets/undraw_Progress_overview.svg";
import Logo1 from "../../assets/undraw_To_do_list.svg";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Box from '@material-ui/core/Box';


const Journey = ({ handleSelection, isRetired }) => {

  return (
    <div className="journey">
      <Typography variant='h3' color="textPrimary" gutterBottom align="center" style={{width: "50rem"}}>
      <Box fontWeight="fontWeightBold" style={{marginBottom: "3.5rem"}}>
      First, tell us where you are on the retirement journey.
      </Box>
      
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
           classes={{descriptiveButtonRoot: isRetired === false ? 'selected' : ''  }}
            onClick={() => {
              handleSelection(false);
            }}
            className="descriptive-button"
            icon={Logo1}
            label="I'm retiring soon"
          />
        </Grid>

        <Grid item>
          <DescriptiveButton
           classes={{descriptiveButtonRoot: isRetired === true ? 'selected' : ''  }}
            onClick={() => {
              handleSelection(true);
            }}
            className="descriptive-button"
            icon={Logo2}
            label="I'm already retired"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Journey;

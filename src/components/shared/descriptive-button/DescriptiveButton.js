import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  discriptiveButtonRoot: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "200px",
    borderRadius: "8px",
    padding: "10px",
    alignContent: "space-between",
    background: theme.palette.primary.main,

    '& img': {
      maxHeight: "100px",
      padding: "15px"
    },

    '& span': {
      fontSize: "24px",
       paddingBottom: "0.75em"
    }
  },

  clicked: {
    border: "3px solid",
    borderColor: theme.palette.secondary.main,
  }
  
 
});



const onClick = () => {
  
  console.log('click')
};

const DescriptiveButton = withStyles(styles)(({classes, label, description, icon }) => {

  return (

      <ButtonBase focusRipple className={classes.discriptiveButtonRoot}>

          <img src={icon} alt={label} />
          <Typography color="textSecondary">
            <span>{label}</span>
          </Typography>

          <Typography color="textSecondary">
            {description}
          </Typography>


      </ButtonBase>

  );
});

export default DescriptiveButton;

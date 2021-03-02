import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import "./descriptive-button.style.scss";

const DescriptiveButton = ({ label, description }) => {
  return (
    <div className='descriptive-button'>
      <ButtonBase focusRipple>
        <div>
          <span>{label}</span>
          <p>{description}</p>
        </div>
      </ButtonBase>
    </div>
  );
};

export default DescriptiveButton;

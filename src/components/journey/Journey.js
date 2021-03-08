import React from "react";
import DescriptiveButton from "../shared/descriptive-button/DescriptiveButton";
import "./journey.style.scss";

const Journey = () => {
  return (
    <div className="journey-container">
      <h1>Great, let's get you on the right journey!</h1>
      <p>
        Please select the option below that best matches your current situation.
      </p>
      <div className="button-container">
        <DescriptiveButton
          className="descriptive-button"
          label="Not Yet Retire"
          description="You need help planing your nest egg.">
          </DescriptiveButton>
        <DescriptiveButton
          className="descriptive-button"
          label="Retired"
          description="You need help tracking your nest egg."
        ></DescriptiveButton>
      </div>
    </div>
  );
};

export default Journey;

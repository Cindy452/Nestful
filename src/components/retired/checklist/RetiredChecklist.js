import React from "react";
import Input from "@material-ui/core/Input";
import "./checklist.style.scss";

export default function RetiredChecklist() {
  return (
    <div className="checklist-container">
      <h1>A Quick Retirement Nest Egg Check</h1>
      <p>
        Please fill in the blanks with your retirement nest eggs and spending habits. Don't worry this stays between us
      </p>
      <div>
        <span>
          I want my nest egg to start
          <Input type="number" className="year" />
          more years.
        </span>
        <span>
          I have 
          <Input type="text" className="currencyinput" defaultValue='$' />
          saved for retirement
        </span>
      </div>
      <div>
        <span>
          I spend about 
          <span className="currencyinput" >
            <Input type="text" name="currency" defaultValue="$" />
          </span>
          per month
        </span>
      </div>
    </div>
  );
}

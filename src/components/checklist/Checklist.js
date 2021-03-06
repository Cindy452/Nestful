import React from "react";
import Input from "@material-ui/core/Input";
import "./checklist.style.scss";

export default function Checklist() {
  return (
    <div className="checklist-container">
      <h1>Are you on track for retirement</h1>
      <p>
        Please fill in the blanks with your retirement asiprations and current
        financial picture. Don't worry this stays between us
      </p>
      <div>
        <span>
          I am
          <Input type="text" className="age" />
          years old.
        </span>
        <span>
          I want to retire when I am
          <Input type="text" className="age" />
          years old
        </span>
      </div>
      <div>
        <span>
          I make
          <span className="currencyinput">
            <Input type="text" name="currency" defaultValue="$" />
          </span>
          per year.
        </span>
        <span>
          I've saved
          <span className="currencyinput" >
            <Input type="text" name="currency" defaultValue="$" />
          </span>
          for retirement
        </span>
      </div>

      <span>
        I plan to save an aditional
        <span className="currencyinput">
          <Input type="text" name="currency" defaultValue="$" />
        </span>
        per month until I retire
      </span>
    </div>
  );
}

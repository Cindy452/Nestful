import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(95);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleAgeIncrement = () => {
    setAge((prevCount) => prevCount + 1);
  };

  const handleAgeDecrement = () => {
    setAge((prevCount) => prevCount - 1);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }


  return (
    <div>
      <h1>Average Annual Return</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleIncrement}>+</Button>
        <Button>{count}.00%</Button>
        <Button onClick={handleDecrement}>-</Button>
      </ButtonGroup>
      <p>
        What do you expect your annual return on your retirement savings to be?
      </p>
      <h1>Life expectancy</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={handleAgeIncrement}>+</Button>
        <TextField
          onChange={handleChangeAge}
          value={age}
        />

        <Button onClick={handleAgeDecrement}>-</Button>
      </ButtonGroup>
      <p>
        A life expectancy of 95 years is a common financially conservative estimate for Canadians
      </p>
    </div>
   
  );
}
export default Counter;

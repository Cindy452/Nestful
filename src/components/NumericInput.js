import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";

export default function NumericInput({value, onValueChanged}) {
    const handleIncrement = () => {
        onValueChanged(value + 1);
    };
  
    const handleDecrement = () => {
        onValueChanged(value - 1);
    };
  
    const handleChange = (e) => {
        onValueChanged(e.target.value);
    }
    return (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button onClick={handleIncrement}>+</Button>
            <TextField
                onChange={handleChange}
                value={value}
            />
            <Button onClick={handleDecrement}>-</Button>
        </ButtonGroup>
    );
}
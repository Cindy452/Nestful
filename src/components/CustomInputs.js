import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { InputAdornment, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import NumberFormat from "react-number-format";

const customTextFieldStyles = (theme) => ({
    textField: {
        margin: "0 8px",
        background: "#54878D",
        color: "#E4FDE1",
        borderRadius: "10px",
        lineHeight: "1.1876em",
        padding: "12px 8px",
        border: "0",
        width: "104px",
        height: "48px",
        verticalAlign: "middle",
        "& input": {
            fontWeight: "600",
            color: "#E4FDE1",
        },
        "& .MuiInput-root": {
            fontSize: "inherit",
        },
        "& .MuiInputAdornment-root p": {
            fontSize: "0.75em",
            color: "#E4FDE1",
        },
        "& .MuiInputBase-input": {
            padding: "0",
            textAlign: "center",
        }
    }
});

export const CustomTextField = withStyles(customTextFieldStyles)((props) => {
    const {classes, className, ...other} = props;
    return <TextField
        {...other}
        multiline={false}
        className={[classes.textField, className].join(' ')}
        InputProps={{
            ...props.InputProps,
            disableUnderline: true,
        }}
    />
});

const moneyInputStyles = (theme) => ({
    moneyInput: {
        "&.MuiTextField-root": {
            width: "180px",
        },
        "& .MuiInputBase-input": {
            textAlign: "left",
        }
    }
});

export const MoneyInput = withStyles(moneyInputStyles)((props) => {
    const {classes, className, onChange, name, value, ...other} = props;
    return <NumberFormat
        className={[classes.moneyInput, className].join(" ")}
        {...other}
        value={value}
        customInput={CustomTextField}
        InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
        thousandSeparator=" "
        onValueChange={({value}) => {
            onChange({target: {value}})
        }}
        isNumericString
    />
});

const numericInputStyles = (theme) => ({
    buttonGroup: {
        backgroundColor: "white",
        border: "3px solid #54878D",
        borderRadius: "8px",
        width: "310px",
    },
    middle: {
        borderColor: "#54878D",
        borderSize: "3px",
        borderRadius: 0,
        "& input": {
            
            padding: "12px 8px",
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "24px",
            height: "56px",
            fontWeight: "400",
            border: 0,
            color: "#54878D",
            outline: 0,
        }
    },
});

export const NumericInput = withStyles(numericInputStyles)(({classes, value, onValueChanged}) => {
    const handleIncrement = () => {
        onValueChanged(parseInt(value) + 1);
    };
  
    const handleDecrement = () => {
        onValueChanged(parseInt(value) - 1);
    };
  
    const handleChange = (e) => {
        onValueChanged(e.target.value);
    }
    return (
        <ButtonGroup color="primary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button onClick={handleIncrement}>+</Button>
            <TextField
                className={classes.middle}
                InputProps={{
                    className: classes.middleInput
                }}
                onChange={handleChange}
                value={value}
            />
            <Button onClick={handleDecrement}>-</Button>
        </ButtonGroup>
    );
});
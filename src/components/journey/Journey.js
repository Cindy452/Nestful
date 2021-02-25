import React, {useState} from 'react';
import useStyles from './journey.style';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



export default function Journey() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      Are you planning to retire soon or already retired?
      </Button>
      <InputLabel id="demo-controlled-open-select-label" />
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={1} >Near-Retire</MenuItem>
          <MenuItem value={2} >Retired</MenuItem>
        </Select>
    </div>
  );
}


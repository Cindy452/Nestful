import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./calendar.style.scss";
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';

export default function ChoseDate() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <Grid style={{margin: 25}}  container spacing={3}>
        <Grid item xs={6}>
          <Calendar value={dateState} onChange={changeDate} />
        </Grid>
        <Grid>
          <h1>Set your desired retirement day</h1>
          <h2>You can always change this later</h2>
          <h1>
            Current selected date is{" "}
            <b>{moment(dateState).format("MMMM Do YYYY")}</b>
          </h1>
          <Button
            className="button-container" 
            variant="contained"
            color="primary"
            size="small"
            >
           Save the date
           </Button>
        </Grid>
    </Grid>
  );
}

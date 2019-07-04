import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({

}));

export default function DatePicker({ label }) {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-19T21:11:54")
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <KeyboardDatePicker
      margin="normal"
      id="mui-pickers-date"
      label={label}
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
    />
  );
}
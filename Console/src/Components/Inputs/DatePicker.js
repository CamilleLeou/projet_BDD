import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
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
      className={classes.textField}
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
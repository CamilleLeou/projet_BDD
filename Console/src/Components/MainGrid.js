import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TitleInput from "./Typography/TitleInput";


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: 20,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  function KeyboardDatePickerExample(props) {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TitleInput data="Add user" />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TitleInput data="Add campaign" />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <KeyboardDatePicker
                  margin="normal"
                  id="mui-pickers-date"
                  label="Date picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TitleInput data="Add prospect list" />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TitleInput data="Add prospect" />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}

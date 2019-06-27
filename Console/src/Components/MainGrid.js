import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TitleInput from "./Typography/TitleInput";
import DatePicker from './Inputs/DatePicker';
import TextInput from './Inputs/TextInput';
import Button from './Button'

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

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add user" />
            <TextInput label="Name"/>
            <Button label="ADD"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add campaign" />
            <TextInput label="Name"/>
            <DatePicker label="Beggining date" />
            <DatePicker label="Ending date" />
            <TextInput label="Name"/>
            <TextInput label="Name"/>
            <Button label="ADD"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add prospect list" />
            <TextInput label="Name"/>
            <Button label="ADD"/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add prospect" />
            <TextInput label="Name"/>
            <TextInput label="Name"/>
            <TextInput label="Name"/>
            <TextInput label="Name"/>
            <Button label="ADD"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


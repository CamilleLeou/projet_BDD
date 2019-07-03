import React from "react";
import { Formik } from 'formik';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TitleInput from "./Typography/TitleInput";
import DatePicker from './Inputs/DatePicker';
import TextInput from './Inputs/TextInput';
import Button from './Button';
import Chooser from './Inputs/Chooser';
import FormControl from '@material-ui/core/FormControl'
import {ProductConsumer} from '../context'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: "center"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 190
  },
  paper: {
    margin: 20,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add campaign" />
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <Chooser />
                <TextInput label="Name" />
                <DatePicker label="Beggining date" />
                <DatePicker label="Ending date" />
                <TextInput label="Name" />
                <TextInput label="Name" />
                <Button label="ADD" />
              </FormControl>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add prospect list" />
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <Chooser />
                <TextInput label="Name" />
                <Button label="ADD" />
              </FormControl>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={5} md={3}>
          <Paper className={classes.paper}>
            <TitleInput data="Add prospect" />
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <Chooser />
                <TextInput label="Name" />
                <TextInput label="Name" />
                <TextInput label="Name" />
                <TextInput label="Name" />
                <Button label="ADD" />
              </FormControl>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div >
  );
}


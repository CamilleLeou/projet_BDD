import React, { Component, Fragment } from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TitleInput from "../Typography/TitleInput";
import TextInput from "../Inputs/TextInput";
import Button from "../Button";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { ProductConsumer } from "../../context";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
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

export default function AddUser() {
  const classes = useStyles();
  
  const setUsers = () => {
    // Ici un call api react qui va bien
    // localhost:3000/api/query
    let query = "select * from dba_prj01.Prospect";
    let url = "http://localhost:3000/api/query?query=" + encodeURIComponent(query);
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
      console.log(data);
      /*
      this.setState((data) => {
        return { users: data };
      });
      */
    });
  };

  setUsers();

  return (
    <Paper className={classes.paper}>
      <TitleInput data="Add user" />
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextInput label="Name" />
          <Button label="ADD" />
        </FormControl>
      </form>
    </Paper>
  );
}

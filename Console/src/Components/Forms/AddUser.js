import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import { makeStyles } from "@material-ui/core/styles";
import TitleInput from "../Typography/TitleInput";
import TextInput from '../Inputs/TextInput';
import Button from '../Button';
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
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
    )
}

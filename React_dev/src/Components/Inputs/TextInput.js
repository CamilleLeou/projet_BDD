import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
  }));

export default function TextInput({label}) {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: "Cat in the Hat"
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <TextField
                id="standard-name"
                label={label}
                className={classes.textField}
                value={values.name}
                onChange={handleChange("name")}
                margin="normal"
            />
        </div>
    )
}


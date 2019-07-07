import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function SimpleSelect() {
    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        //   <form className={classes.root} autoComplete="off">
        //     <FormControl className={classes.formControl}>
        <React.Fragment>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
            value={values.age}
            onChange={handleChange}
            inputProps={{
                name: 'age',
                id: 'age-simple',
            }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </React.Fragment>
        
          //  </FormControl>
        //</form>
    )
}
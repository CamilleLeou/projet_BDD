/*
import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Button from "@material-ui/core/Button";

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            return value.state.users.map( user => {
                return <Button key={user.id_utilisateurs}>{user.nom}</Button>;
            })
          }}
        </ProductConsumer>
      </div>
    );
  }
}

*/

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class SimpleSelect extends Component {
  state = {
    age: "0",
    name: "hai"
  };

  handleChange = event => {
      console.log(event.target.value)
    this.setState({
      age: event.target.value
    });
  };

  render() {
    return (
      <form autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

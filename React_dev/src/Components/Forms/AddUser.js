import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import TitleInput from "../Typography/TitleInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 32,
  padding: "0 30px",
  marginTop: "20px"
});

export default class AddUser extends Component {
  state = {
    name: ""
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  addUserBDD = () => {
    fetch("http://localhost:3050/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };

  render() {
    const { name } = this.state;

    return (
      <React.Fragment>
        <TitleInput data="Add user" />
        <FormControl>
          <TextField
            label="Name"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Enter name"
          />
          <MyButton onClick={this.addUserBDD}>
            ADD
          </MyButton>
        </FormControl>
      </React.Fragment>
    );
  }
}

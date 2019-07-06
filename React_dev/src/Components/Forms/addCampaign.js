import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";
import TitleInput from "../Typography/TitleInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import { ProductConsumer } from "../../context";

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

const MyInpuxText = styled(TextField)({
  marginTop: "10px"
});

const MySelect = styled(Select)({
    marginTop: "10px"
  });

export default class AddUser extends Component {
  state = {
    userID: 1,
    name: "",
    beggining_date: "",
    ending_date: "",
    started_campaign: true,
    responses: 0
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleDateBegginingChange = e => {
    this.setState({
      beggining_date: e.target.value
    });
  };

  handleDateEndingChange = e => {
    this.setState({
      ending_date: e.target.value
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
    const {
      userID,
      name,
      beggining_date,
      ending_date,
      started_campaign,
      responses
    } = this.state;

    return (
      <React.Fragment>
        <TitleInput data="Add campaign" />
        <FormControl>
          <InputLabel>Assign user</InputLabel>
          <MySelect />
          <MyInpuxText
            label="Beggining date"
            type="date"
            defaultValue="2019-06-07"
            onChange={this.handleDateBegginingChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <MyInpuxText
            label="Ending date"
            type="date"
            defaultValue="2017-06-24"
            onChange={this.handleDateBegginingChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Campaign name"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Enter name"
          />

          <MyButton onClick={this.addUserBDD}>ADD</MyButton>
        </FormControl>
      </React.Fragment>
    );
  }
}

import React from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import MainGrid from "./Components/MainGrid";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import AddUser from "./Components/Forms/AddUser";

function App() {
  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Appbar />
        <MainGrid />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

export default App;

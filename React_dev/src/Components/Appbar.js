import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Plus_one from "@material-ui/icons/PlusOne";
import Search from "@material-ui/icons/Search"

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    marginLeft: 25
  },
  buttonIcon: {
    marginRight: 4
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            PostgreSQL Console
          </Typography>
          <Button className={classes.button} color="inherit">
            <Plus_one className={classes.buttonIcon}/>
            Fill DB
          </Button>
          
          <Button className={classes.buttonIcon} color="inherit">
          <Search className={classes.buttonIcon}/>
            Query DB
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

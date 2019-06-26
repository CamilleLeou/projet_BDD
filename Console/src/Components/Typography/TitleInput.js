import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

export default function TitleInput({ data }) {
  const classes = useStyles();

  return (
    <Typography variant="h5" gutterBottom>
      {data}
    </Typography>
  );
}

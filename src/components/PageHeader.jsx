import { Paper, Typography } from "@mui/material";
import React from "react";
import useStyles from "./PageStyles";

const PageHeader = () => {
  const classes=useStyles();
  return (
    <Paper elevation={0} className={classes.paperStyles} square>
      <Typography variant="h6" className={classes.headerStyles} component="div">
        Content 
      </Typography>
      <Typography variant="subtitle2" component="div">
        Manage here
      </Typography>
    </Paper>
  );
};

export default PageHeader;
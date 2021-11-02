import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import { borderLeft } from '@mui/system';
import React from 'react';
import ContactIcons from './ContactIcons';


const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    width: '50px',
    bottom: '0px',
    right: 'auto',
    zIndex: 2,
    maxWidth: '48px'
  },
  vline: {
    position: 'relative',
    height: '96px',
    // paddingTop: '24px',
    borderLeft: 'solid 1px',
    left: '12px'
  }
}));

function SidebarLeft() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignContent="center"
      className={classes.container}
    >
      <ContactIcons />
      <Grid
        item
        className={classes.vline}
      />
    </Grid>
  )
}

export default SidebarLeft;

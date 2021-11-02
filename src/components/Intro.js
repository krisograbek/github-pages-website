import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  container: {
    paddingTop: 160,
  },
  paragraph: {
    paddingTop: 24,
  },
  photo: {
    maxWidth: 320,
    maxHeight: 320,
    backgroundColor: "blue",
  }
}))

function Intro() {
  const classes = useStyles();
  return (
    <Grid
      container
      id="home"
      direction="column"
      className={classes.container}
    // spacing={2}
    >
      <Grid item
        className={classes.paragraph}
      >
        <Typography variant="h2Big">
          Kris Ograbek
        </Typography>
      </Grid>
      <Grid item
        className={classes.paragraph}
      >
        <Typography variant="h3Big">
          I Create Machine Learning Content
        </Typography>
      </Grid>
      <Grid item
        className={classes.paragraph}
        xs={4}
      >
        <Typography variant="subtitle1">
          I give life to Machine Learning models by taking them outside of Notebooks.
          I build Full Stack Web Applications. I'm adding value by allowing interactions with the model's inputs.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Intro;

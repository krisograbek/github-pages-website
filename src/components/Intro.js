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
}))

function Intro() {
  const classes = useStyles();
  return (
    <Grid
      container
      id="home"
      direction="column"
      // className={classes.container}
      pt={{ xs: 10, md: 15, lg: 20 }}
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
          Machine Learning Content Creator
        </Typography>
      </Grid>
      <Grid item
        className={classes.paragraph}
      >
        <Typography
          variant="subtitle1"
          sx={{ width: 3 / 4 }}
        >
          I give life to Machine Learning models by taking them outside of Notebooks.
          I build Full Stack Web Applications. I'm adding value by allowing interactions with the model's inputs.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Intro;

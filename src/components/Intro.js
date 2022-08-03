import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  paragraph: {
    paddingTop: 24,
  }
}))

function Intro() {
  const classes = useStyles();
  return (
    <Grid
      container
      id="home"
      direction="column"
      pt={{ xs: 10, md: 15, lg: 20 }}
    >
      <Grid item className={classes.paragraph}>
        <Typography variant="h2Big">
          Kris Ograbek
        </Typography>
      </Grid>
      <Grid item
        className={classes.paragraph}
      >
        <Typography variant="h3Big">
          Content Creator
        </Typography>
      </Grid>
      <Grid item className={classes.paragraph}>
        <Typography variant="h4">
          I believe in Learning by Doing. Because projects help knowledge to stick.
        </Typography>
      </Grid>
      <Grid container borderLeft={4} mt={{ xs: 2, sm: 4, md: 8 }} py={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="text.secondary" pl={3} sx={{ fontStyle: 'italic' }}>
            {/* "An ounce of action is worth a ton of theory" */}
            "Knowledge is best applied through execution."
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" pt={2} pl={3}>
            {/* - Friedrich Engels - */}
            - Tiago Forte -
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Intro;

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'


const useStyles = makeStyles(({
  container: {
    // paddingTop: 160,
  },
  item: {
    paddingBottom: 32,
  },
  paragraph: {
    paddingBottom: 24,
  },
  photo: {
    width: 256,
    height: 256,
    backgroundColor: "blue",
  }
}))

function About() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      id="about"
    >
      <Grid item
        className={classes.item}
      >
        <Grid container>
          {/* empty grid to push About above description */}
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant="h4" component="h2">
              About
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item
        className={classes.item}
      >
        <Grid
          container
          justifyContent="space-between"
        >
          <Grid
            item
            // xs={4}
            className={classes.photo}
          >
            Here comes a photo
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item
                className={classes.paragraph}
              >
                <Typography>
                  Welcome, my name is
                  <Typography variant="spanWhiteBold"> Kris Ograbek </Typography>.
                  Actually, it's Krzysztof but people get very creative when it comes to misspelling my name.
                  So, feel free to call me Kris.
                </Typography>
              </Grid>
              <Grid item
                className={classes.paragraph}
              >
                <Typography>
                  In May 2019, I started learning Data Science. To improve every day while having a full-time job, I decided to wake up at 5 am.
                  In the meanwhile, I became a father. What was my solution to keep learning? Waking up at 4 am. Yes, 4 am is when I start my days.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default About

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
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
    width: '90%',
    // textAlign: 'center'
  },
  photo: {
    width: 256,
    height: 256,
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
          {/* <Grid item xs={6} /> */}
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" textAlign="center">
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
            xs={12} md={6}
            textAlign="center"
          >
            <Box
              component="img"
              sx={{
                width: '90%',
                aspectRatio: 'auto'
                // maxHeight: { xs: 256, sm: 320, lg: 400 },
                // maxWidth: { xs: 256, sm: 320, lg: 400 },
              }}
              alt="The house from the offer."
              src="images/meGray.JPG"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container
              justifyContent="center"
            >
              <Grid item
                className={classes.paragraph}
              >
                <Typography>
                  Welcome, my name is
                  <Typography variant="spanBold"> Kris Ograbek </Typography>.
                  OK, my real name is Krzysztof but people get very creative when it comes to misspelling it.
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

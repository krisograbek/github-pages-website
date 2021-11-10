import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import ContentSectionTitle from './ContentSectionTitle'


const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: 32,
  },
  link: {
    // fontSize: 14,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  paragraph: {
    width: '90%',
    padding: '0 0 32px',
    [theme.breakpoints.down('lg')]: {
      // textAlign: "center",
      padding: '32px 0 0',
    },
  },
}))

function About() {
  const classes = useStyles();
  return (
    <Grid
      id="about"
      container
      direction="column"
      pt={{ xs: 10, md: 15, lg: 20 }}
    >
      <ContentSectionTitle title="About me" />
      <Grid item className={classes.item}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} lg={6} textAlign="center">
            <Box
              component="img"
              sx={{
                width: '90%',
                aspectRatio: 'auto',
              }}
              alt="My image"
              src="images/meGray.JPG"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="center">
              <Grid item className={classes.paragraph}>
                <Typography>
                  Welcome. My name is
                  <Typography variant="spanBold"> Kris Ograbek</Typography>.
                  OK, my real name is Krzysztof but people get very creative when it comes to misspelling it.
                  So, feel free to call me Kris.
                </Typography>
              </Grid>
              <Grid item className={classes.paragraph}>
                <Typography>
                  I'm a self-taught Machine Learning Engineer.
                </Typography>
                <Typography>
                  In 2008, I failed programming classes and dropped out of college.
                </Typography>
                <Typography>
                  In 2021, I get to experience the mystical "flow" state while coding.
                </Typography>
              </Grid>
              <Grid item className={classes.paragraph}>
                <Typography>
                  In my 20's, learning was my unpleasant duty.
                </Typography>
                <Typography>
                  In my 30's, I discovered my passion for learning.
                </Typography>
              </Grid>
              <Grid item className={classes.paragraph}>
                <Typography>
                  At the age of 32, I finally found my purpose. I want to learn and grow every day.
                </Typography>
                <Typography>
                  I'm on the best journey of my life, the one that never ends - Lifelong Learning. Join me!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} pt={4}>
            <Grid container justifyContent="center">
              <Grid item sx={{ width: '90%' }}>
                <Typography>
                  What will you find here?
                </Typography>
                <Typography>
                  My content :) Surprise!
                </Typography>
                <Typography>
                  This website is the heart of my content creation.
                  Every time I'll post something new on
                  <Link href="https://medium.com/@kris-ograbek-nlp"
                    underline="hover"
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Medium
                  </Link> or YouTube, this site will update.
                </Typography>
                <Typography>
                  Every time I'll create a noteworthy project or deploy a Machine Learning Project, you'll find it here.
                </Typography>
              </Grid>
              <Grid container borderLeft={4} mt={{ xs: 2, sm: 4, md: 8 }} py={1}>
                <Grid item xs={12}>
                  <Typography variant="h5" color="text.primary" pl={3} sx={{ fontStyle: 'italic' }}>
                    "Success is a journey, not a destination"
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" pt={2} pl={3}>
                    - Arthur Ashe -
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default About

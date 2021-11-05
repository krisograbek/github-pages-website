import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Intro from './Intro'
import Projects from './Projects'
import ScrollTop from './ScrollTop'

const sections = [
  <Intro />,
  <About />,
  <Projects />,
  <Blog />,
  <Contact />
]

const useStyles = makeStyles(({
  content: {
    // paddingLeft: 16
  },
  contentSection: {
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

function Content() {
  const classes = useStyles();

  return (
    <Grid item className={classes.content}>
      <Grid container alignContent="stretch">
        {sections.map((section) => {
          return (
            <Grid item className={classes.contentSection}>
              {section}
            </Grid>
          )
        })}
      </Grid>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Grid>
  )
}

export default Content

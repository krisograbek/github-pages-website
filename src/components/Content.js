import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Others from './Others'
import Intro from './Intro'
import Projects from './Projects'
import ScrollTop from './ScrollTop'

const sections = [
  <Intro />,
  <About />,
  <Projects />,
  <Blog />,
  // <Others />
]

const useStyles = makeStyles(({
  content: {
    padding: '0 12px 100px 12px',
    // paddingLeft: 16,
    // paddingBottom: 100
    // paddingRight: '8%',
  },
  contentSection: {
    paddingTop: 120,
  },
  paragraph: {
    paddingTop: 24,
  }
}))

function Content() {
  const classes = useStyles();

  return (
    <Grid item className={classes.content}>
      <Grid container
        direction="column"
        alignContent="stretch">
        {sections.map((section) => {
          return (
            <Grid item
              pt={{ xs: 10, sm: 15, md: 20 }}
            // className={classes.contentSection}
            >
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

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fab from '@mui/material/Fab'
import Grid from '@mui/material/Grid'
import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'
import ScrollTop from './ScrollTop'


function Content() {
  return (
    <Grid
      item
      id="home"
      style={{
        paddingTop: 32,
        paddingLeft: 16
      }}
    >
      <Grid container>
        <Grid item>
          <About />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
        <Grid item>
          <Blog />
        </Grid>
        <Grid item>
          <Contact />
        </Grid>
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

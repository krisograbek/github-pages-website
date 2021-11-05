import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import projects from "./data/models.json";
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(({
  item: {
    // paddingTop: 64,
    marginTop: 16,
  }
}))


function Projects() {
  const { item } = useStyles();
  return (
    <Grid id="projects" container>
      <Grid item
        className={item}
        xs={12}
      >
        <Grid container
          justifyContent="space-between"
        >
          <Grid
            item xs={3}
            alignSelf="center"
            textAlign="right"
          >
            <hr />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="h2" textAlign="center">
              Projects
            </Typography>
          </Grid>
          <Grid
            item xs={3}
            alignSelf="center"
          >
            <hr />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          {projects.map((project, id) => {
            return (
              <Grid key={id} item xs={12} sm={12} md={6} lg={4}>
                <ProjectCard project={project} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects

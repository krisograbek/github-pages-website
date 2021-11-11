import Grid from '@mui/material/Grid';
import React from 'react';
import ContentSectionTitle from './ContentSectionTitle';
import projects from "./data/models.json";
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <Grid id="projects" container>
      <ContentSectionTitle title="Projects" />
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

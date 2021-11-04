import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import React, { useState } from 'react'
import FaGithub from '@meronex/icons/fa/FaGithub'
import VscGlobe from '@meronex/icons/vsc/VscGlobe'


const mapIcons = {
  "github": FaGithub,
  "app": VscGlobe
}

const useStyles = makeStyles((theme) => {
  const light = theme.palette.primary.light;
  const dark = theme.palette.primary.dark;
  const mode = theme.palette.mode;
  return ({
    card: {
      marginTop: 32,
    },
    title: {
      paddingBottom: 16,
    },
    tags: {
      padding: '8px 0'
    },
    tag: {
      fontSize: [14, "!important"],
      border: 'solid 1px',
      borderRadius: 6,
      padding: '2px 8px',
    },
    icon: {
      marginTop: '8px',
      fontSize: '24px',
    },
    link: {
      paddingRight: '12px',
      cursor: 'pointer',
      "&:hover": {
        color: mode === "dark" ? light : dark,
      },
    },
    stack: {
      paddingBottom: 8,
      marginBottom: 16,
      borderTop: `1px solid ${theme.palette.text.primary}`,
      borderBottom: `1px solid ${theme.palette.text.primary}`,
      // borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  })
});

function ProjectStack({ list }) {
  const classes = useStyles();
  const stackList = list.split(',');
  return (
    <Grid container spacing={1} className={classes.stack}>
      {stackList.map((item, id) => (
        <Grid item key={id} xs={6} >
          <Box> &#9702;
            <Typography
              variant="spanWhiteBold"
              style={{ paddingLeft: 20 }}
            >
              {/* remove leading and trailing spaces */}
              {item.trim()}
            </Typography>
          </Box>
        </Grid>
      ))
      }
    </Grid>
  )
}

function ProjectCard({ project }) {
  const classes = useStyles();
  const [highlight, setHighlight] = useState(false)

  const titleColor = highlight ? "primary" : "textSecondary"

  return (
    <Card elevation={4} className={classes.card}>
      <CardActionArea
        href={project.urls.app}
        target="_blank"
        rel="noreferrer"
        onMouseOver={() => setHighlight(true)}
        onMouseOut={() => setHighlight(false)}
      >
        <CardContent className={classes.content}>
          <Typography variant="h5" color={titleColor} className={classes.title}>
            {project.title}
          </Typography>
          {/* <Typography>Created with:</Typography> */}
          <ProjectStack list={project.techStack} />
          <Typography>
            {project.description}
          </Typography>
          <Grid container spacing={1} className={classes.tags}>
            {project.tags.map((tag, id) => (
              <Grid item key={id} >
                <Typography color="textSecondary" className={classes.tag}>
                  {tag}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      {project.urls &&
        <Grid container justifyContent="flex-end">
          {Object.keys(project.urls).map((url, key) => {
            const Icon = mapIcons[url];
            return (
              <Typography key={key} style={{ textAlign: 'right', }}>
                <Link
                  href={project.urls[url]}
                  className={classes.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className={classes.icon} />
                </Link>
              </Typography>
            )
          })}
        </Grid>
      }
    </Card>
  )
}

export default ProjectCard

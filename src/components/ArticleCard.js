import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 32,
    "&:hover": {
      transform: "scale(1.02)",
      transition: "transform ease 0.2s",
    },
  },
  title: {
    paddingTop: 4,
  },
  subtitle: {
    paddingTop: 4,
    // fontSize: [18, "!important"],
    fontWeight: [600, "!important"],
  },
  date: {
    paddingBottom: 12
  },
  tags: {
    padding: '8px 0 16px'
  },
  tag: {
    border: 'solid 1px',
    borderRadius: 6,
    // the next 3 lines are to test preffered tagging
    // borderColor: theme.palette.text.secondary,
    // backgroundColor: theme.palette.text.secondary,
    // color: `${theme.palette.background.default} !important`,
    // marginLeft: 16,
    padding: '2px 8px',
  }
}));

function ArticleCard({ article }) {
  const classes = useStyles();
  const [highlight, setHighlight] = useState(false)

  const titleColor = highlight ? "primary" : "textSecondary"

  console.log(highlight)

  return (
    <Card elevation={4} className={classes.card}>
      <CardActionArea
        href={article.link}
        target="_blank"
        rel="noreferrer"
        onMouseOver={() => setHighlight(true)}
        onMouseOut={() => setHighlight(false)}
      >
        <CardMedia
          component="img"
          height="256"
          image={article.imgSrc}
          alt="article image"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.date}>
            {article.publishDate}
          </Typography>
          <Typography variant="h5" color={titleColor}>
            {article.title}
          </Typography>
          <Typography className={classes.subtitle}>
            {article.subtitle}
          </Typography>
          <Grid container spacing={1} className={classes.tags}>
            {article.tags.map((tag, id) => (
              <Grid item key={id} >
                <Typography color="textSecondary" className={classes.tag}>
                  {tag}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Typography>
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <Typography>Links</Typography> */}
    </Card>
  )
}

export default ArticleCard

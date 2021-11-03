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
  },
  subtitle: {
    paddingTop: 24
  },
  date: {
    paddingBottom: 12
  },
  tags: {
    padding: '16px 0 24px'
  },
  tag: {
    border: 'solid 1px',
    borderRadius: 6,
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
          <Typography variant="h6" className={classes.subtitle}>
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
    </Card>
  )
}

export default ArticleCard

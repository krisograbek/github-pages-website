import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import React from 'react'

function ArticleCard({ article }) {
  return (
    <Card elevation={4}>
      <CardActionArea
        href={article.link}
        target="_blank"
        rel="noreferrer"
      >
        <CardMedia
          component="img"
          height="256"
          image={article.imgSrc}
          alt="article image"
        />
        <CardContent>
          <Typography>
            {article.publishDate}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            {article.title}
          </Typography>
          <Typography>
            {article.subtitle}
          </Typography>
          {/* <CardHeader
          title={article.title}
          subheader={article.subtitle}
        /> */}
          <Typography>
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard

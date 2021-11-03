import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
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
        <CardHeader
          title={article.title}
        />
        <CardContent>
          <Typography>
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ArticleCard

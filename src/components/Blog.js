import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import articles from "./data/articles.json";
import ArticleCard from './ArticleCard';
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  item: {
    // paddingTop: 64,
  }
}));

function Blog() {
  const { item } = useStyles();
  return (
    <Grid id="blog" container direction="column">
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
              Articles
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
          {articles.map((article, id) => {
            return (
              <Grid key={id} item xs={12} sm={12} md={6} lg={4}>
                <ArticleCard article={article} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Blog

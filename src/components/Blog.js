import Grid from '@mui/material/Grid';
import React from 'react';
import ArticleCard from './ArticleCard';
import ContentSectionTitle from './ContentSectionTitle';
import articles from "./data/articles.json";

function Blog() {
  return (
    <Grid id="blog" container direction="column">
      <ContentSectionTitle title={"Articles"} />
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

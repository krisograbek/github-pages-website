import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'

function ContentSectionTitle(props) {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="space-between">
        <Grid item xs={3} alignSelf="center" textAlign="right">
          <hr />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" component="h2" textAlign="center">
            {props.title}
          </Typography>
        </Grid>
        <Grid item xs={3} alignSelf="center">
          <hr />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContentSectionTitle

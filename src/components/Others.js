import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(({
  container: {
    width: '100%',
  },
  item: {
    // paddingTop: 64,
  }
}));

function Others() {
  const { item } = useStyles();
  return (
    <Grid id="others" container
      direction="column"
    >
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
              Others
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
        <Typography>
          Yet to come ....
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Others;

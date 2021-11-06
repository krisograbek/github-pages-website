import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function Footer() {
  return (
    <Grid item>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 3, sm: 5 }}
      >
        {/* <Box textAlign="center"> */}
        <Grid container
          // direction="column"
          alignContent="center"
          justifyContent="center"
        // spacing={3}
        >
          <Grid item xs={12} sm={3}>
            ContActs
          </Grid>
          <Grid item xs={12} sm={3}>
            ContActs
          </Grid>
          <Grid item xs={12} sm={3}>
            ContActs
          </Grid>
          <Grid item xs={12}
            textAlign="center"
            pt={{ xs: 3, sm: 5 }}
          >
            Designed and created by Krzysztof Ograbek &reg; 2021
          </Grid>
        </Grid>
        {/* </Box> */}
      </Box>
    </Grid >
  )
}

export default Footer

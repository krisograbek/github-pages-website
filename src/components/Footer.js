import React from 'react'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles';
import grey from '@mui/material/colors/grey';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaGithub from '@meronex/icons/fa/FaGithub';
import FaHackerrank from '@meronex/icons/fa/FaHackerrank';
import FaKaggle from '@meronex/icons/fa/FaKaggle';
import FaMedium from '@meronex/icons/fa/FaMedium';
import FaStackOverflow from '@meronex/icons/fa/FaStackOverflow';
import FaReddit from '@meronex/icons/fa/FaReddit';
import GoMail from '@meronex/icons/go/GoMail';
import Typography from '@mui/material/Typography'


const useStyles = makeStyles((theme) => {
  const greyLight = grey[200];
  const greyDark = grey[800];
  const dark = theme.palette.primary.dark;
  const light = theme.palette.primary.light;
  const mode = theme.palette.mode;
  return ({
    root: {
      backgroundColor: mode === "dark" ? greyDark : greyLight,
    },
    icon: {
      fontSize: '20px',
      position: 'relative',
      // I need this to keep icon and link text at the same level
      top: 3,
      [theme.breakpoints.down('sm')]: {
        // fontSize: '20px',
        // textAlign: 'left'
      },
    },
    link: {
      "&:hover": {
        color: theme.palette.primary.main,
      }
    },
  })
});

const links = [
  { "link": "https://www.linkedin.com/in/kris-ograbek-nlp/", "icon": FaLinkedin, name: "LinkedIn" },
  { "link": "https://github.com/krisograbek", "icon": FaGithub, name: "GitHub" },
  { "link": "https://medium.com/@kris-ograbek-nlp", "icon": FaMedium, name: "Medium" },
  { "link": "https://stackoverflow.com/users/15191870/krisograbek", "icon": FaStackOverflow, name: "StackOverflow" },
  { "link": "https://www.hackerrank.com/krzysztof_ograb1", "icon": FaHackerrank, name: "HackerRank" },
  // { "link": "https://www.kaggle.com/ograbekk", "icon": FaKaggle, name: "Kaggle" },
  // { "link": "https://www.reddit.com/user/krispudzian", "icon": FaReddit, name: "Reddit" },
]


function Footer() {
  const classes = useStyles();


  return (
    <Grid item xs={12}
      // className={classes.root}
      sx={{
        bgcolor: 'text.secondary',
        color: 'background.default'
      }}
    >
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 3, sm: 5 }}
      >
        {/* <Box textAlign="center"> */}
        <Grid container
          alignContent="center"
          justifyContent="center"
          spacing={3}
        >

          <Grid item xs={12} sm={6}>
            <Box borderBottom={1} mb={1}>Navigate</Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box borderBottom={1} mb={1}>Contacts</Box>
            <Box>
              <Link
                href="mailto:krzysztof.ograbek@gmail.com"
                className={classes.link}
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noreferrer"
              >
                <GoMail className={classes.icon} />
                <Typography variant="span" px={1}>
                  krzysztof.ograbek@gmail.com
                </Typography>
              </Link>
            </Box>
            <Grid container direction="column" >
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Grid item key={link.link}>
                    <Box paddingTop={{ xs: 0, md: 1 }}>
                      <Typography variant="span"
                      // px={{ xs: 1, md: 2 }}
                      // mb={{ xs: '2px', sm: '8px' }}
                      >
                        <Link
                          href={link.link}
                          className={classes.link}
                          color="inherit"
                          underline="hover"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon className={classes.icon} />
                          <Typography variant="span" px={1}>
                            {link.name}
                          </Typography>
                        </Link>
                      </Typography>
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}
            textAlign="center"
            pt={{ xs: 3, sm: 5 }}
          >
            Designed and created by Krzysztof Ograbek &copy; {new Date().getFullYear()}
          </Grid>
          <Grid item xs={12}
            textAlign="center"
            pt={{ xs: 3, sm: 5 }}
          >
            <Link href="https://github.com/krisograbek/github-pages-website"
              className={classes.link}
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </Link>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Box >
    </Grid >
  )
}

export default Footer

import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import React from 'react';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaGithub from '@meronex/icons/fa/FaGithub';
import FaHackerrank from '@meronex/icons/fa/FaHackerrank';
import FaKaggle from '@meronex/icons/fa/FaKaggle';
import FaMedium from '@meronex/icons/fa/FaMedium';
import FaStackOverflow from '@meronex/icons/fa/FaStackOverflow';
import FaReddit from '@meronex/icons/fa/FaReddit';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: '24px',
    marginTop: '16px'
  },
  box: {
    marginBottom: '32px',
  }
}));

const links = [
  { "link": "https://www.linkedin.com/in/kris-ograbek-nlp/", "icon": FaLinkedin },
  { "link": "https://github.com/krisograbek", "icon": FaGithub },
  { "link": "https://medium.com/@kris-ograbek-nlp", "icon": FaMedium },
  { "link": "https://stackoverflow.com/users/15191870/krisograbek", "icon": FaStackOverflow },
  { "link": "https://www.hackerrank.com/krzysztof_ograb1", "icon": FaHackerrank },
  { "link": "https://www.kaggle.com/ograbekk", "icon": FaKaggle },
  { "link": "https://www.reddit.com/user/krispudzian", "icon": FaReddit },
]

function ContactIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      {links.map((item, id) => {
        const Icon = item.icon;
        return (
          <Grid
            key={id}
            item
            className={classes.item}
          >
            {/* <Typography variant="body1" > */}
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className={classes.icon} />
            </Link>
            {/* </Typography> */}
          </Grid>
        )
      })}
    </Box>
  )
}

export default ContactIcons

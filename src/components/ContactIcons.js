import FaGithub from '@meronex/icons/fa/FaGithub';
import FaHackerrank from '@meronex/icons/fa/FaHackerrank';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaMedium from '@meronex/icons/fa/FaMedium';
import FaStackOverflow from '@meronex/icons/fa/FaStackOverflow';
import FaYoutube from '@meronex/icons/fa/FaYoutube';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => {
  const light = theme.palette.primary.light;
  const dark = theme.palette.primary.dark;
  const mode = theme.palette.mode;
  return ({
    icon: {
      marginTop: '16px',
      fontSize: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        textAlign: 'left'
      },
    },
    link: {
      position: 'relative',
      transition: 'top ease 0.2s',
      top: 0,
      "&:hover": {
        color: mode === "dark" ? light : dark,
        top: '-4px'
      }
    },
    box: {
      marginBottom: '32px',
      width: '100%',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
        paddingLeft: 12,
      }
    }
  })
});

const links = [
  { "link": "https://www.linkedin.com/in/kris-ograbek-nlp/", "icon": FaLinkedin },
  { "link": "https://www.youtube.com/channel/UCyi_Df2NF35qjIV0LdtUY9w", "icon": FaYoutube },
  { "link": "https://github.com/krisograbek", "icon": FaGithub },
  { "link": "https://medium.com/@kris-ograbek", "icon": FaMedium },
  { "link": "https://stackoverflow.com/users/15191870/krisograbek", "icon": FaStackOverflow },
  { "link": "https://www.hackerrank.com/krzysztof_ograb1", "icon": FaHackerrank },
  // { "link": "https://www.kaggle.com/ograbekk", "icon": FaKaggle },
  // { "link": "https://www.reddit.com/user/krispudzian", "icon": FaReddit },
]

function ContactIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      {links.map((item, id) => {
        const Icon = item.icon;
        return (
          <Grid key={id} item>
            <Link
              href={item.link}
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              <Icon className={classes.icon} />
            </Link>
          </Grid>
        )
      })}
    </Box>
  )
}

export default ContactIcons

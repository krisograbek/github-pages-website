import FaGithub from '@meronex/icons/fa/FaGithub';
import FaHackerrank from '@meronex/icons/fa/FaHackerrank';
import FaKaggle from '@meronex/icons/fa/FaKaggle';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaMedium from '@meronex/icons/fa/FaMedium';
import FaStackOverflow from '@meronex/icons/fa/FaStackOverflow';
import GoMail from '@meronex/icons/go/GoMail';
import Box from '@mui/material/Box';
import grey from '@mui/material/colors/grey';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/styles/useTheme';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

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
    },
    link: {
      fontSize: 14,
      "&:hover": {
        color: theme.palette.primary.main,
      }
    },
  })
});

const links = [
  { "link": "mailto:krzysztof.ograbek@gmail.com", "icon": GoMail, name: "Email" },
  { "link": "https://www.linkedin.com/in/kris-ograbek-nlp/", "icon": FaLinkedin, name: "LinkedIn" },
  { "link": "https://github.com/krisograbek", "icon": FaGithub, name: "GitHub" },
  { "link": "https://medium.com/@kris-ograbek-nlp", "icon": FaMedium, name: "Medium" },
  { "link": "https://stackoverflow.com/users/15191870/krisograbek", "icon": FaStackOverflow, name: "StackOverflow" },
  { "link": "https://www.hackerrank.com/krzysztof_ograb1", "icon": FaHackerrank, name: "HackerRank" },
  { "link": "https://www.kaggle.com/ograbekk", "icon": FaKaggle, name: "Kaggle" },
  // { "link": "https://www.reddit.com/user/krispudzian", "icon": FaReddit, name: "Reddit" },
]

const menuItems = [
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#blog", name: "blog" },
  // { link: "#others", name: "others" },
]
const othersItems = [
  // { link: "#yet", name: "yet" },
  // { link: "#to", name: "to" },
  // { link: "#come", name: "come" },
  // { link: "#books", name: "books" },
  // { link: "#quotes", name: "quotes" },
]

function FooterNavigateItem({ link, name, isOther }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMobile)
  return (
    <Grid item
      sx={{
        mb: 1,
        pl: isMobile ? 0 : 1,
        pr: isMobile ? 1 : 0
      }}
    >
      <Link href={link}
        underline="hover"
        color="inherit"
        className={classes.link}>
        {isMobile ?
          <Typography variant="spanBold" color="inherit">
            {name}
            {isOther && <Typography variant="span"> &#9702; </Typography>}
          </Typography>
          :
          <Typography variant="spanBold" color="inherit">
            {isOther && <Typography variant="span"> &#9702; </Typography>}
            {name}
          </Typography>
        }
      </Link>
    </Grid>
  )
}


function FooterNavigate(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item
      xs={12} sm={6}
      pb={1}
      pr={{ xs: 1, md: 2 }}
      textAlign={`${isMobile ? "right" : "left"}`}
    >
      <Box
        sx={{
          borderBottom: 1,
          mb: 1,
          pl: isMobile ? 0 : 1,
          pr: isMobile ? 1 : 0
        }}
      >
        Navigate
      </Box>
      {menuItems.map((item) => (
        <FooterNavigateItem {...item} {...props} />
      ))}
      {othersItems && othersItems.map((item) => (
        <FooterNavigateItem {...item} isOther={true} />
      ))}
    </Grid>
  )
}

function FooterContacts(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item
      xs={12} sm={6}
      pb={1}
      pr={{ xs: 1, md: 2 }}
      textAlign={`${isMobile ? "right" : "left"}`}
    >
      <Box
        sx={{
          borderBottom: 1,
          mb: 1,
          pl: isMobile ? 0 : 1,
          pr: isMobile ? 1 : 0
        }}
      >
        Contacts & Profiles
      </Box>
      <Grid container direction="column" >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Grid item
              key={link.link}
              sx={{
                pl: isMobile ? 0 : 1,
                pr: isMobile ? 1 : 0
              }}
            >
              <Box pb={1} pl={1}>
                <Typography variant="span">
                  <Link
                    href={link.link}
                    className={classes.link}
                    color="inherit"
                    underline="hover"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {!isMobile && <Icon className={classes.icon} />}
                    <Typography variant="span" px={1}>
                      {link.name}
                    </Typography>
                    {isMobile && <Icon className={classes.icon} />}
                  </Link>
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

function Footer(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12}
      sx={{
        bgcolor: 'text.secondary',
        color: 'background.default'
      }}
    >
      <Container maxWidth="xl">
        <Box
          px={{ xs: 3, md: 5 }}
          py={{ xs: 3, md: 5 }}
        >
          <Grid container
            justifyContent="center"
            alignContent="center"
            spacing={{ sm: 1, md: 2 }}
          >
            <FooterNavigate {...props} />
            <FooterContacts {...props} />
            <Grid item xs={12}
              textAlign="center"
              pr={{ xs: 1, md: 2 }}
            >
              <Box
                pt={{ xs: 2, sm: 3 }}
                borderTop={1}
              >
                Designed and created by Krzysztof Ograbek &copy; {new Date().getFullYear()}
              </Box>
            </Grid>
            <Grid item xs={12}
              textAlign="center"
            >
              <Box>
                <Link href="https://github.com/krisograbek/github-pages-website"
                  className={classes.link}
                  color="inherit"
                  underline="hover"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box >
      </Container>
    </Grid >
  )
}

export default Footer

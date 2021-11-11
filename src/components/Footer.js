import FaGithub from '@meronex/icons/fa/FaGithub';
import FaHackerrank from '@meronex/icons/fa/FaHackerrank';
import FaKaggle from '@meronex/icons/fa/FaKaggle';
import FaLinkedin from '@meronex/icons/fa/FaLinkedin';
import FaMedium from '@meronex/icons/fa/FaMedium';
import FaStackOverflow from '@meronex/icons/fa/FaStackOverflow';
import GoMail from '@meronex/icons/go/GoMail';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';
import React from 'react';

const useStyles = makeStyles((theme) => {
  return ({
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


function FooterSectionContainer(props) {
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
      > {props.title}
      </Box>
      {props.children}
    </Grid>
  )
}

function FooterSectionItem(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid item
      sx={{
        pb: 1,
        pl: isMobile ? 0 : 1,
        pr: isMobile ? 1 : 0
      }}
    >
      <Link href={props.link}
        underline="hover"
        color="inherit"
        className={classes.link}
        target={props.isContact ? "_blank" : "_self"}
        rel={props.isContact && "noreferrer"}
      >
        {props.children}
      </Link>
    </Grid>
  )
}

function FooterNavigate() {
  return (
    <Box>
      {menuItems.map((item) => (
        <FooterSectionItem {...item} >
          <Typography variant="spanBold" color="inherit">
            {item.name}
          </Typography>
        </FooterSectionItem>
      ))}
      {othersItems && othersItems.map((item) => (
        <FooterSectionItem {...item} >
          <Typography variant="spanBold" color="inherit">
            {item.name} -
          </Typography>
        </FooterSectionItem>
      ))}
    </Box>
  )
}

function FooterContacts() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" >
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <FooterSectionItem {...item} isContact={true}>
            {!isMobile && <Icon className={classes.icon} />}
            <Typography variant="span" px={1}>
              {item.name}
            </Typography>
            {isMobile && <Icon className={classes.icon} />}
          </FooterSectionItem>
        )
      })}
    </Grid>
  )
}

function Footer() {
  const classes = useStyles();

  return (
    <Grid item xs={12}
      sx={{
        bgcolor: 'text.secondary',
        color: 'background.default',
        zIndex: 1
      }}
    >
      <Container maxWidth="xl">
        <Box
          px={{ xs: 3, md: 5 }}
          py={{ xs: 3, md: 5 }}
        >
          <Grid container
            spacing={{ sm: 1, md: 2 }}
          >
            <FooterSectionContainer title="Navigate">
              <FooterNavigate />
            </FooterSectionContainer>
            <FooterSectionContainer title="Contacts & Profiles">
              <FooterContacts />
            </FooterSectionContainer>
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
            <Grid item xs={12} textAlign="center">
              <Box>
                <Link href="https://github.com/krisograbek/github-pages-website"
                  className={classes.link}
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

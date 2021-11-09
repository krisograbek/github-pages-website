import Brightness4 from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunny from '@mui/icons-material/WbSunny';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';
import React, { useState } from 'react';
// import { ReactComponent as Logo } from './logo/logo_dark.svg'
import { ReactComponent as Logo } from './logo/logo.svg'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '8px 0'
  },
  menuLink: {
    fontSize: '16px',
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  logo: {
    fillColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  }
}));

const menuItems = [
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#blog", name: "blog" },
  // { link: "#others", name: "others" },
  // delete after testing
  // { link: "#footer", name: "footer" }
]

function MobileNavbar() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor)

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  }

  return (
    <Grid
      container
      justifyContent="flex-end"
    >
      <IconButton
        aria-label="menu"
        onClick={handleMenu}
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchor}
        open={open}
        onClose={handleMenuClose}
      >
        {menuItems.map(({ link, name }) => {
          return (
            <Link
              key={name}
              underline="hover"
              className={classes.menuLink}
              href={link}
              onClick={() => setAnchor(null)}
            >
              <MenuItem>
                {name}
              </MenuItem>
            </Link>
          )
        })}

      </Menu>
    </Grid>
  )
}

function DesktopNavbar() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="flex-end"
    >
      {menuItems.map(({ link, name }) => {
        return (
          <Grid item style={{ paddingLeft: 16 }}>
            <Link href={link}
              underline="hover"
              className={classes.menuLink}>
              {name}
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

function Header(props) {
  const { themeMode, setThemeMode } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trigger = useScrollTrigger();

  const Icon = themeMode ? WbSunny : Brightness4;

  return (
    <Grid item>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="default">
          <Grid container
            className={classes.container}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={1}
              textAlign="center"
            >
              <Link
                color="secondary"
                href="#"
              >
                <Logo
                  height={48} width={48}
                  fill={theme.palette.primary.main}
                  stroke={theme.palette.primary.main}
                />
              </Link>
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="h6"
              >
                {isMobile ?
                  <MobileNavbar />
                  :
                  <DesktopNavbar />
                }
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography
                textAlign="center"
              >
                <IconButton
                  edge="end"
                  color="primary"
                  size="small"
                  aria-label="mode"
                  onClick={() => setThemeMode(!themeMode)}
                >
                  <Icon fontSize="small" />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </Slide>
    </Grid >
  )
}

export default Header

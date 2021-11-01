import Brightness3Outlined from '@mui/icons-material/Brightness3Outlined';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import makeStyles from '@mui/styles/makeStyles';
import useTheme from '@mui/styles/useTheme';
import React, { useState } from 'react';

const mobileStyles = makeStyles({
  menu: {
    // flexGrow: 1,
    // alignSelf: 'flex-end',
    // justifySelf: 'flex-end'
  }
});

const useStyles = makeStyles({
  navItems: {
    flexGrow: 1
  },
  logo: {
    padding: '0 16px'
  }
});

const menuItems = [
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#blog", name: "blog" },
  { link: "#contact", name: "contact" }
]

function MobileNavbar() {
  const { menu } = mobileStyles();
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
      // spacing={1}
      justifyContent="flex-end"
    >
      <IconButton
        aria-label="menu"
        onClick={handleMenu}
        className={menu}
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
              color="primary"
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
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-end"
    >
      <Grid item><Link href="#about">About</Link></Grid>
      <Grid item><Link href="#projects">Projects</Link></Grid>
      <Grid item><Link href="#blog">Blog</Link></Grid>
      <Grid item><Link href="#contact">Contact</Link></Grid>
    </Grid>
  )
}

function Header(props) {
  const { themeMode, setThemeMode } = props;
  const { navItems, logo } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trigger = useScrollTrigger();

  const Icon = themeMode ? WbSunnyOutlined : Brightness3Outlined;

  return (
    <Grid item>
      {/* Hide on scroll */}
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Link variant="h6"
              className={logo}
              color="primary"
              href="#"
            >
              LOGO
            </Link>
            <Typography
              className={navItems}
              variant="h6"
            >
              {isMobile ?
                <MobileNavbar />
                :
                <DesktopNavbar />
              }
            </Typography>
            <Typography
              style={{ paddingLeft: 20 }}
            >
              <IconButton
                edge="end"
                color="primary"
                size="small"
                aria-label="mode"
                onClick={() => setThemeMode(!themeMode)}
              >
                <Icon fontSize="medium" />
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>
    </Grid >
  )
}

export default Header

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

const useStyles = makeStyles({
  navItems: {
    // flexGrow: 1
  },
  logo: {
    // padding: '0 16px'
  }
});

const menuItems = [
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#blog", name: "blog" },
  { link: "#contact", name: "contact" }
]

function MobileNavbar() {
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
      // spacing={2}
      justifyContent="flex-end"
    >
      {menuItems.map(({ link, name }) => {
        return (
          <Grid item style={{ paddingLeft: 12 }}>
            <Link href={link}>
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
  const { navItems, logo } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const trigger = useScrollTrigger();

  const Icon = themeMode ? WbSunnyOutlined : Brightness3Outlined;

  return (
    <Grid item>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" color="default">
          {/* <Toolbar> */}
          <Grid container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={1}
              textAlign="center"
            // alignSelf="center"
            >
              <Link variant="h6"
                className={logo}
                color="primary"
                href="#"
              >
                KO
              </Link>
            </Grid>
            <Grid item xs={10}>
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
                  <Icon fontSize="medium" />
                </IconButton>
              </Typography>
            </Grid>
            {/* </Toolbar> */}
          </Grid>
        </AppBar>
      </Slide>
    </Grid >
  )
}

export default Header

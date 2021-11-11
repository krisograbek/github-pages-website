import grey from '@mui/material/colors/grey';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Container from '@mui/material/Container'

const applyCommonTheme = theme => createTheme(theme, {
  typography: {
    h4: {
      color: theme.palette.text.secondary
    },
    h2Big: {
      color: theme.palette.text.secondary,
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 900,
    },
    h3Big: {
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 700,
    },
    spanBold: {
      color: theme.palette.text.secondary,
      fontWeight: 600
    },
  }
});

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#00958b',
      main: '#00796d',
      dark: '#004d40',
    },
    text: {
      primary: grey[700],
      secondary: '#000'
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#a9dfdd',
      main: '#6ccbc7',
      dark: '#00a69e',
    },
    text: {
      primary: grey[400],
      secondary: '#fff'
    }
  },
});

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  }
});

function App() {
  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  let theme = themeMode ? darkTheme : lightTheme;
  theme = applyCommonTheme(theme);
  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const visabilityThreshold = 100;

  const getOffset = (element) => {
    const rect = element && element.getBoundingClientRect();
    return rect.top;
  };

  const listenToScroll = () => {
    const footerTopOffset =
      getOffset(document.querySelector("#footer"));

    if (footerTopOffset < (window.innerHeight + visabilityThreshold)) {
      showSidebar &&      // to limit setting state only the first time
        setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0} square={true}>
        <Grid container direction="column" alignItems="flex-end">
          <Header setThemeMode={setThemeMode} themeMode={themeMode} />
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={1}>
                {showSidebar && !isMobile && < SidebarLeft />}
              </Grid>
              <Grid item xs={12} sm={10}>
                <Content />
              </Grid>
              <Grid item xs={1}>
                {showSidebar && <SidebarRight />}
              </Grid>
            </Grid>
          </Container>
          <Grid id="footer" container>
            <Footer />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider >
  );
}

export default App;

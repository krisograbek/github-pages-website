import grey from '@mui/material/colors/grey';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SidebarLeft from './components/SidebarLeft';


const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#00958b',
      main: '#00796d',
      dark: '#004d40',
      // contrastText: '#000',
    },
    text: {
      primary: grey[700],
      secondary: '#000'
    }
  },
  typography: {
    h4: {
      color: '#000'
    },
    h2Big: {
      color: '#000',
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 900,
    },
    h3Big: {
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 700,
    },
    spanWhiteBold: {
      color: '#000',
      fontWeight: 600
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#a9dfdd',
      main: '#6ccbc7',
      dark: '#00a69e',
      // contrastText: '#fff',
    },
    text: {
      primary: grey[400],
      secondary: '#fff'
    }
  },
  typography: {
    h4: {
      color: '#fff'
    },
    h2Big: {
      color: '#fff',
      fontWeight: 900,
      fontSize: 'clamp(2rem, 8vw, 3rem)',
    },
    h3Big: {
      fontSize: 'clamp(2rem, 8vw, 3rem)',
      fontWeight: 700,
    },
    spanWhiteBold: {
      color: '#fff',
      fontWeight: 600
    },
  }
});

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: 20
  }
});

function App() {
  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);
  let theme = themeMode ? darkTheme : lightTheme;
  theme = responsiveFontSizes(theme);


  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0} square={true}>
        <Grid
          container
          direction="column"
        >
          <Header setThemeMode={setThemeMode} themeMode={themeMode} />
          <Grid container
          >
            <Grid item xs={1}>
              <SidebarLeft />
            </Grid>
            <Grid item xs={10}>
              <Content />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider >
  );
}

export default App;

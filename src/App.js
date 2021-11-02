import grey from '@mui/material/colors/grey';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      contrastText: '#fff',
    },
    text: {
      primary: grey[700],
      secondary: '#000'
    }
  },
  typography: {
    h4: {
      color: '#000'
    }
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#a9dfdd',
      main: '#6ccbc7',
      dark: '#00a69e',
      contrastText: '#fff',
    },
    text: {
      primary: grey[400],
      secondary: '#fff'
    }
  },
  typography: {
    h4: {
      color: '#fff'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 20
  }
}));

function App() {
  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);
  const theme = themeMode ? darkTheme : lightTheme;


  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0} square={true}>
        <Grid
          container
          direction="column"
        >
          <Header setThemeMode={setThemeMode} themeMode={themeMode} />
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <SidebarLeft />
            </Grid>
            <Grid item xs={10}>
              <Content />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

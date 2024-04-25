import Routing from '@components/Routing';
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;

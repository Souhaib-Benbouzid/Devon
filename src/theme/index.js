import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';
// import darkPallet from './dark-palette';
// import lightPallet from './light-palette';
// import overrides from './overrides';
// import typography from './typography';

export const Theme = ({ children }) => {
  //   const palette = darkMode ? darkPallet : lightPallet;
  const darkMode = useSelector((state) => state.layout.darkMode);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

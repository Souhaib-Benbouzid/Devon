import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';

export const Theme = ({ children }) => {
  const darkMode = useSelector((state) => state.layout.darkMode);
  const darkTheme = {
    palette: {
      type: 'dark',
    },
  };

  const lightTheme = {
    palette: {
      type: 'light',
    },
  };

  const theme = createMuiTheme(darkMode === 'on' ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector } from 'react-redux';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

export const Theme = ({ children }) => {
  const { darkMode, language } = useSelector((state) => state.layout);
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

  if (language === 'ar') {
    theme.direction = 'rtl';
    document.querySelector('body').setAttribute('dir', 'rtl');
    // Configure JSS
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StylesProvider jss={jss}>{children}</StylesProvider>;
      </ThemeProvider>
    );
  } else {
    document.querySelector('body').setAttribute('dir', 'ltr');
    theme.direction = 'ltr';
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

import React from 'react';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => {
  const obj = {
    standard: {
      color: '#FFF',
      hover: '#bb86fc',
      inverted: '#000',
      lighter: '#1d1d1d',
      darker: '#121212'
    }
  };

  return (
    <ThemeProvider theme={obj.standard}>
      {children}
    </ThemeProvider>
  );
};

export default Layout;

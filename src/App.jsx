import React, { useState, useMemo } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const theme = useMemo(() => {
    const basePalette = {
      primary: {
        main: '#a93800', // burnt rose
      },
      secondary: {
        main: '#00464b', // deep teal
      },
      info: {
        main: '#00ffff', // cyan highlight
      },
    };

    const palette = darkMode
      ? {
          mode: 'dark',
          background: {
            default: '#0a1c1d', // rich dark background
            paper: '#112728',
          },
          text: {
            primary: '#e6f4f1',
            secondary: '#b0bec5',
          },
          ...basePalette,
        }
      : {
          mode: 'light',
          background: {
            default: '#f4f6f5', // soft light background
            paper: '#ffffff',
          },
          text: {
            primary: '#1a1a1a',
            secondary: '#555555',
          },
          ...basePalette,
        };

    const themeConfig = createTheme({
      palette,
      typography: {
        fontFamily: `'Inter', 'Roboto', 'Helvetica Neue', sans-serif`,
        h1: { fontWeight: 700 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 500 },
        button: { textTransform: "none", fontWeight: 500 },
      },
      shape: {
        borderRadius: 12,
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              boxShadow: darkMode
                ? "0 2px 12px rgba(0,0,0,0.4)"
                : "0 2px 10px rgba(0,0,0,0.08)",
            },
          },
        },
      },
    });

    return responsiveFontSizes(themeConfig);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
    </ThemeProvider>
  );
};

export default App;

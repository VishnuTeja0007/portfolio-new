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
import SkillsSection from "./sections/skills";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const theme = useMemo(() => {
    const basePalette = {
      primary: {
        main: '#00bcd4', // Vibrant Cyan
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ff7043', // Warm Orange for good contrast
      },
      info: {
        main: '#ab47bc', // Muted Purple accent
      },
    };

    const palette = darkMode
      ? {
          mode: 'dark',
          background: {
            default: '#121212', // Near-black for contrast
            paper: '#1e1e1e',    // Slightly lighter for surfaces
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#bdbdbd',
          },
          ...basePalette,
        }
      : {
          mode: 'light',
          background: {
            default: '#f5f7f9', // Soft warm gray background
            paper: '#ffffff',
          },
          text: {
            primary: '#212121',
            secondary: '#424242',
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
      <SkillsSection/>
    </ThemeProvider>
  );
};

export default App;

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from '@mui/material/Link';

const pages = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

const Navbar = ({darkMode, toggleDarkMode}) => {
  // const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme=useTheme()


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="sticky" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Left side: Name */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#home"
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textDecoration: "none",
                cursor: "pointer",
                userSelect: "none",
                letterSpacing: 1,
                fontSize: { xs: "1.4rem", md: "1.5rem" },
                flexShrink: 0,
              }}
              aria-label="Vishnu Teja"
            >
              Vishnu Teja
            </Typography>

            {/* Right side: Dark mode toggle, hamburger/menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Desktop: Tabs next to dark mode icon */}
              <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
                {pages.map(({ label, href }) => (
                  <Button
                    key={label}
                    href={href}
                    color="primary"
                    onClick={handleCloseNavMenu}
                    sx={{
                      fontWeight: "medium",
                      borderRadius: 0,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                      textTransform: "none",
                      color: "inherit",
                    }}
                  >
                    {label}
                  </Button>
                ))}
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="toggle dark mode"
                  onClick={toggleDarkMode}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    color: "inherit",
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>

              {/* Mobile: Dark mode icon and hamburger menu */}
              <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="toggle dark mode"
                  onClick={toggleDarkMode}
                  sx={{
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    marginRight: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    color: "inherit",
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="open navigation menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={(e) => setAnchorElNav(e.currentTarget)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Mobile menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, href }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu} component={Link} href={href}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;

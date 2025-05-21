import React from "react";
import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: { xs: 3, sm: 4 },
        px: { xs: 1, sm: 2, md: 6 },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 2, sm: 3 }}
      >
        {/* Logo or Name */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          Vishnu Teja
        </Typography>

        {/* Navigation Links */}
        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          spacing={{ xs: 1, sm: 3 }}
          alignItems="center"
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              underline="hover"
              color="inherit"
              sx={{
                fontWeight: 500,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        {/* Social Icons */}
        <Stack 
          direction="row" 
          spacing={{ xs: 0.5, sm: 1 }}
          sx={{ 
            mt: { xs: 1, sm: 0 },
            '& .MuiIconButton-root': {
              padding: { xs: 0.5, sm: 1 }
            }
          }}
        >
          <IconButton
            component="a"
            href="https://github.com/VishnuTeja0007"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            size="small"
          >
            <GitHub sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/vishnu-teja-cheepati-055244252"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            size="small"
          >
            <LinkedIn sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:vishnuteja98765@gmail.com"
            color="inherit"
            size="small"
          >
            <Email sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          </IconButton>
        </Stack>
      </Stack>

      {/* Copyright */}
      <Typography
        variant="body2"
        align="center"
        sx={{ 
          mt: { xs: 2, sm: 3 }, 
          color: theme.palette.text.secondary,
          fontSize: { xs: '0.75rem', sm: '0.875rem' }
        }}
      >
        © {new Date().getFullYear()} Vishnu Teja. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

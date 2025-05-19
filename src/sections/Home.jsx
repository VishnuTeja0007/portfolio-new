import React from "react";
import { Box, Typography, Button, Stack, useTheme, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";
import TechIcons from "../components/Techicons"; 

const Home = () => {
  const theme = useTheme();

  return (
<Box
  id="home"
  sx={{
    position: "relative", // Important
    overflow: "hidden",   // Prevent scrollbars
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: { lg:1, xs: 4, md: 1 },
    background: theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #1e1e1e 0%, #121212 100%)"
      : "linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)",
  }}
>
  <TechIcons /> {/* Add here */}
  {/* Your existing content */}
        <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
            textAlign:{xs:"center",md:"left"}
          }}
        >
          {/* Left Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
              Hi, I'm{" "}
              <span style={{ color: theme.palette.primary.main }}>
                <Typewriter
                  words={["Vishnu Teja", "a JNTUA Fresher", "a Tech Enthusiast"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              Full Stack Web Developer
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 600, mb: 4, mt: 1 }}>
              I build beautiful, performant web applications using the MERN stack.
              Passionate about crafting clean code and seamless user experiences.
            </Typography>

            <Stack direction="row"
            sx={
              {
                flex:{xs:"column", md:"row"},
                justifyContent:{xs:"center",md:"flex-start"},
                alignItems:"center",
                }} 
            spacing={2}>
             <Button
  variant="contained"
  color="primary"
  size="large"
  href="/resume.pdf"
  target="_blank"
  sx={{
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textTransform: "none",
    textWrap:"nowrap"
  }}
>
  Download Resume
</Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="#about"
                 sx={{
                  textWrap:"nowrap",
    textTransform: "none",
  }}
              >
                About Me
              </Button>
            </Stack>
          </Box>

          {/* Right Section (Image) */}
         <Box
  sx={{
    width: { xs: "100%", sm: "300px", md: "400px" },
    aspectRatio: "1", // Makes sure width = height
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: 3,
  }}
>
  <Box
    component="img"
    src={profilePic}
    alt="Vishnu Teja"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Keeps it neat and fills the space without distortion
    }}
  />
</Box>
</Box>
      </Container>
    </Box>
  );
};

export default Home;

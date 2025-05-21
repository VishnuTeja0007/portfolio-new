import React from "react";
import { Box, Typography, Button, Stack, useTheme, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
// import profilePic from "../assets/profile.jpg";
import TechBackground from "../components/TechBackground"; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from "framer-motion";
import ProfileCardCarousel from "../components/carousal";

const Home = () => {
  const theme = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };
const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Put your actual resume path in `public/`
    link.download = "VishnuTeja_Resume.pdf";
    link.click();
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { lg:1, xs: 4, md: 1 },
        background: theme.palette.mode === "dark"
          ? "linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(18, 18, 18, 0.95) 100%)"
          : "linear-gradient(135deg, rgba(240, 248, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)",
      }}
    >
      <TechBackground />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
            textAlign:{xs:"center",md:"left"},
            width: "100%"
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
             onClick={handleDownload}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.getContrastText(theme.palette.primary.main),
                  textTransform: "none",
                  textWrap:"nowrap",
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease',
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
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: { xs: '280px', sm: '300px', md: '400px' },
              mx: 'auto',
            }}
          >
            <ProfileCardCarousel/>
          </Box>
        </Box>
      </Container>

      {/* Scroll More Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: { xs: "none", md: "block" }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            onClick={scrollToAbout}
            sx={{
              color: theme.palette.primary.main,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
              "&:hover": {
                backgroundColor: "transparent",
                transform: "translateY(5px)",
              },
              transition: "transform 0.3s ease",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Scroll More
            </Typography>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <KeyboardArrowDownIcon />
            </motion.div>
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;

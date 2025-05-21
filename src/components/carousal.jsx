// components/ProfileCardCarousel.jsx
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import profile from "../assets/profiles/profile.jpg";
import profile2 from "../assets/profiles/profile2.jpg";
import profile3 from "../assets/profiles/profile3.jpg";

const images = [profile, profile2, profile3];

const ProfileCardCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds for each image
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: { 
          xs: "280px", // Fixed width for mobile
          sm: "300px", 
          md: "400px" 
        },
        height: { 
          xs: "280px", // Fixed height for mobile
          sm: "300px", 
          md: "400px" 
        },
        borderRadius: { xs: "15px", sm: "20px" },
        overflow: "hidden",
        boxShadow: { xs: 3, sm: 5 },
        mx: "auto", // Center the carousel
        my: { xs: 2, sm: 0 },
      }}
    >
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </AnimatePresence>
    </Box>
  );
};

export default ProfileCardCarousel;

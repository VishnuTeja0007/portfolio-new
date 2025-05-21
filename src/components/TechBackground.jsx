import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/javascript.svg";
import nodeLogo from "../assets/node.svg";
import gitHub from "../assets/github.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import sql from "../assets/mysql.svg";
import mdb from "../assets/mongodb.svg"

// Icon positions (you can add more icons similarly)
const generateRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 80) + 5}%`,   // 5% to 85%
  left: `${Math.floor(Math.random() * 90) + 5}%`,  // 5% to 95%
});

const icons = [
  { src: reactLogo },
  { src: jsLogo },
  { src: git },
  { src: gitHub },
  { src: java },
  { src: python },
  { src: html },
  { src: css },
  { src: sql },
  { src: mdb },
].map(icon => ({
  src: icon.src,
  style: generateRandomPosition()
}));


const TechBackground = () => {
  const containerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const offsetX = (clientX - centerX) / centerX;
      const offsetY = (clientY - centerY) / centerY;

      iconRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = 15 + index * 5; // Vary movement speed per icon
          ref.style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {icons.map((icon, index) => (
        <Box
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          component="img"
          src={icon.src}
          alt={`tech-icon-${index}`}
          sx={{
            position: "absolute",
            width: { xs: 40, sm: 50, md: 60 },
            opacity: 0.15,
            transition: "transform 0.1s ease-out",
            filter: "blur(0.5px)",
            ...icon.style,
          }}
        />
      ))}
    </Box>
  );
};

export default TechBackground;

import React from "react";
import { motion } from "framer-motion";

import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import jsLogo from "../assets/javascript.svg";
import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";

// Create a diverse layout of icons across the screen
const icons = [
  { src: reactLogo, top: "15%", left: "10%", delay: 0 },
  { src: nodeLogo, top: "25%", left: "70%", delay: 1 },
  { src: jsLogo, top: "40%", left: "50%", delay: 2 },
  { src: pythonLogo, top: "55%", left: "20%", delay: 1.5 },
  { src: javaLogo, top: "65%", left: "80%", delay: 2.2 },
  { src: htmlLogo, top: "75%", left: "30%", delay: 0.8 },
  { src: cssLogo, top: "85%", left: "60%", delay: 1.7 },

  // Repeat with varied positions
  { src: reactLogo, top: "30%", left: "85%", delay: 2.5 },
  { src: jsLogo, top: "10%", left: "40%", delay: 1.2 },
  { src: nodeLogo, top: "60%", left: "10%", delay: 2.8 },
  { src: htmlLogo, top: "20%", left: "55%", delay: 1.1 },
  { src: cssLogo, top: "50%", left: "75%", delay: 2.6 },
];

const TechIcons = () => {
  return (
    <>
      {icons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt="tech-icon"
          initial={{ y: 0, opacity: 0.1 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 8 + (idx % 3),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: icon.delay,
          }}
          style={{
            position: "absolute",
            top: icon.top,
            left: icon.left,
            width: 40,
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.5,
            filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))",
          }}
        />
      ))}
    </>
  );
};

export default TechIcons;

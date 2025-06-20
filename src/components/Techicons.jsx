import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.svg";
import jsLogo from "../assets/javascript.svg";
import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";

const icons = [
  { src: reactLogo, top: "10%", left: "5%", delay: 0 },
  { src: nodeLogo, top: "10%", left: "25%", delay: 1 },
  { src: jsLogo, top: "10%", left: "45%", delay: 2 },
  { src: pythonLogo, top: "10%", left: "65%", delay: 1.5 },
  { src: javaLogo, top: "10%", left: "85%", delay: 2.2 },
  { src: htmlLogo, top: "30%", left: "5%", delay: 0.8 },
  { src: cssLogo, top: "30%", left: "25%", delay: 1.7 },
  { src: reactLogo, top: "30%", left: "45%", delay: 2.5 },
  { src: jsLogo, top: "30%", left: "65%", delay: 1.2 },
  { src: nodeLogo, top: "30%", left: "85%", delay: 2.8 },
  { src: htmlLogo, top: "50%", left: "5%", delay: 1.1 },
  { src: cssLogo, top: "50%", left: "25%", delay: 2.6 },
  { src: reactLogo, top: "50%", left: "45%", delay: 2.5 },
  { src: jsLogo, top: "50%", left: "65%", delay: 1.2 },
  { src: nodeLogo, top: "50%", left: "85%", delay: 2.8 },
  { src: htmlLogo, top: "70%", left: "5%", delay: 1.1 },
  { src: cssLogo, top: "70%", left: "25%", delay: 2.6 },
];

const TechIcons = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX - innerWidth / 2) / 50;
      const offsetY = (e.clientY - innerHeight / 2) / 50;

      iconRefs.current.forEach((ref, idx) => {
        if (ref) {
          const factor = 1 + (idx % 4); // Different parallax depths
          ref.style.transform = `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {icons.map((icon, idx) => (
        <motion.img
          key={idx}
          src={icon.src}
          alt="tech-icon"
          ref={(el) => (iconRefs.current[idx] = el)}
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
            opacity: 0.8,
            filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))",
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </>
  );
};

export default TechIcons;

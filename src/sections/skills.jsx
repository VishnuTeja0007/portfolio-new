import React from "react";
import { Box, Typography, Grid, LinearProgress, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

// Placeholder icons
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import mysqlIcon from "../assets/mysql.svg";
import mongoIcon from "../assets/mongodb.svg";
import gitIcon from "../assets/git.svg";

const skills = [
  {
    icon: htmlIcon,
    title: "HTML",
    description: "Semantic, accessible, responsive markup",
    proficiency: 90,
  },
  {
    icon: cssIcon,
    title: "CSS",
    description: "Layouts, Flexbox, Grid, animations",
    proficiency: 85,
  },
  {
    icon: jsIcon,
    title: "JavaScript",
    description: "ES6+, DOM manipulation, APIs",
    proficiency: 80,
  },
  {
    icon: reactIcon,
    title: "React",
    description: "Hooks, components, state management",
    proficiency: 85,
  },
  {
    icon: nodeIcon,
    title: "Node.js",
    description: "REST APIs, middleware, async ops",
    proficiency: 75,
  },
  {
    icon: mysqlIcon,
    title: "MySQL",
    description: "Database design, joins, queries",
    proficiency: 80,
  },
  {
    icon: mongoIcon,
    title: "MongoDB",
    description: "NoSQL, collections, aggregation",
    proficiency: 70,
  },
  {
    icon: gitIcon,
    title: "Git",
    description: "Version control, branching, GitHub",
    proficiency: 90,
  },
];

const SkillCard = ({ icon, title, description, proficiency }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            component="img"
            src={icon}
            alt={title}
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={proficiency}
          sx={{ height: 8, borderRadius: 5 }}
        />
      </Paper>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <Box sx={{ px: 4, py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          I’m a passionate developer with a wide array of technical skills and soft skills that help me work efficiently in team environments and deliver quality software. Here’s a glance at what I bring to the table.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <SkillCard {...skill} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default SkillsSection;

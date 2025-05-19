import React from "react";
import { Box, Container, Typography, Grid, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Placeholder icons
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/node.svg";
import mysqlIcon from "../assets/mysql.svg";
import mongoIcon from "../assets/mongodb.svg";
import teamwork from "../assets/team.svg";
import time from "../assets/time.svg";
import problemsolving from "../assets/solving.svg";
import adaptability from "../assets/adaptability.svg";

// import gitIcon from "../assets/git.svg"; // Git removed as it doesn't fit the categories

const skills = {
  languages: [
    {
      icon: htmlIcon,
      title: "HTML",
      description: "Semantic, accessible, responsive markup with modern HTML5 features",
      rating: 5,
    },
    {
      icon: cssIcon,
      title: "CSS",
      description: "Advanced layouts, Flexbox, Grid, animations, and responsive design",
      rating: 4,
    },
    {
      icon: jsIcon,
      title: "JavaScript",
      description: "Modern ES6+, DOM manipulation, APIs, and asynchronous programming",
      rating: 4,
    },
  ],
  frameworks: [
    {
      icon: reactIcon,
      title: "React",
      description: "Component-based architecture, Hooks, state management, and modern React patterns",
      rating: 4,
    },
    {
      icon: nodeIcon,
      title: "Node.js",
      description: "Server-side development, REST APIs, middleware, and asynchronous operations",
      rating: 3,
    },
  ],
  databases: [
    {
      icon: mysqlIcon,
      title: "MySQL",
      description: "Relational database design, complex joins, optimized queries, and data modeling",
      rating: 4,
    },
    {
      icon: mongoIcon,
      title: "MongoDB",
      description: "NoSQL database management, collections, aggregation, and data modeling",
      rating: 3,
    },
    
  ],
  softskills:[{
    icon:teamwork,
    title:"Teamwork",
    description:"Played Team leader role in final year group project",
    rating:4
  },{
    icon:problemsolving,
    title:"Problem Solving",
    description:"I have Strong Problem skills with python and DSA",
    rating:4
  },{
    icon:time,
    title:"Time Management",
    description:"I am very punctual with deadlines and can manage my time efficiently",
    rating:4
  },
  {
    icon:adaptability,
    title:"Adaptability",
    description:"I can easily adapt to any new technology that was given to me within given prep time",
    rating:4
  }]
};

const SkillCard = ({ icon, title, description, rating }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
          width:{lg:"80vw"},
          borderRadius: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box
            component="img"
            src={icon}
            alt={title}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">{title}</Typography>
            <Box sx={{ display: "flex", gap: 0.5, mt: 1 }}>
              {[...Array(5)].map((_, index) => (
                index < rating ? 
                  <StarIcon key={index} sx={{ color: "gold" }} /> : 
                  <StarBorderIcon key={index} sx={{ color: "gold" }} />
              ))}
            </Box>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

const SkillsSection = () => {
  const theme = useTheme();
  return (
    <Box
      id="about"
      sx={{ py: 10, px: 2, backgroundColor: theme.palette.mode==="dark" ? "#160d08": "#F4F5FA"  }}
    >
      <Container maxWidth='lg'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Skills
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            I'm a passionate developer with a wide array of technical skills and soft skills that help me work efficiently in team environments and deliver quality software. Here's a glance at what I bring to the table.
          </Typography>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Languages
            </Typography>
            <Grid container spacing={4}>
              {skills.languages.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <SkillCard {...skill} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Frameworks
            </Typography>
            <Grid container spacing={4}>
              {skills.frameworks.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <SkillCard {...skill} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Databases
            </Typography>
            <Grid container spacing={4}>
              {skills.databases.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <SkillCard {...skill} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Softskills
            </Typography>
            <Grid container spacing={4}>
              {skills.softskills.map((skill, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <SkillCard {...skill} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SkillsSection;

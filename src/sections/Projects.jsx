import React from 'react';
import { Box, Container, Typography, Grid,IconButton, Card, CardContent, CardActions, Button, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

// Import your project images from the @assets/projects folder
import snap from '../assets/projects/snappycelebrations.png';
import chat from '../assets/projects/chatapp.png';
import cf from '../assets/projects/cookingfever.png';
import speed from '../assets/projects/speedcontrol.jpg';

// Placeholder project data - Replace with your actual project details and image imports
const projects = [
  {
    title: 'Casual Chat App',
    description: 'A real-time group chat application built using React, Express, and Socket.io. Users can create groups and chat seamlessly with WebSocket-based communication.',
    image: chat, // import chat from '../assets/chat.png'
    tags: ['Web App', 'Socket.io', 'MERN Stack'],
    link: 'https://casual-chat-app.netlify.app/',
    githubLink: 'https://github.com/VishnuTeja0007/Casual-Chat-App'
  },
  {
    title: 'Snappy Celebrations',
    description: 'A professional event planning website designed for a startup, featuring responsive UI, service showcase, and contact management built using React and Node.js.',
    image: snap, // import snap from '../assets/snap.png'
    tags: ['Website Development', 'React', 'Startup'],
    link: 'https://snappycelebrations.in',
    githubLink: 'https://github.com/VishnuTeja0007/'
  },
  {
    title: 'Cooking Fever',
    description: 'A recipe-sharing platform developed using the MERN stack, where users can browse, add, and view detailed cooking instructions with an intuitive interface.',
    image: cf, // import cf from '../assets/cf.png'
    tags: ['Web App', 'MERN Stack', 'Recipe Sharing'],
    link: '/',
    githubLink: 'https://github.com/VishnuTeja0007/'
  },
  {
    title: 'Speed Control of DC Motor using Machine Learning',
    description: 'An academic project involving the application of evolutionary machine learning algorithms in MATLAB to control DC motor speed more efficiently.',
    image: speed, // import speed from '../assets/speed.png'
    tags: ['ML Project', 'MATLAB', 'Control Systems'],
    link: '/',
    githubLink: 'https://github.com/VishnuTeja0007/'
  }
];


const ProjectItem = ({ project, index }) => {
  const theme = useTheme();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
          borderRadius: 0,
          overflow: 'hidden',
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
          color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        }}
      >
         <Box
         component="img"
         src={`${project.image}`}
          sx={{
            flex: 1,
            order:1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: 200, md: 300 },
            backgroundColor: theme.palette.action.disabledBackground, // Placeholder background
            // Uncomment and use your imported image variable
            // backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 0,
            flexBasis: { md: '50%' },
            maxWidth: { md: '50%' },
          }}
        >
           {/* Replace this Box with an <img /> tag if you uncomment the backgroundImage above */}
           {/* <Typography variant='h6' color="text.secondary">Project Preview</Typography> */}
        </Box>
        {/* Project Card Content */}
        <Box
          sx={{
            flex:1 ,
            order:1,
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            {project.description}
          </Typography>
          <Box sx={{ mb: 3 }}>
            {project.tags.map((tag, tagIndex) => (
              <Typography
                key={tagIndex}
                variant="caption"
                sx={{
                  mr: 1,
                  p: 0.5,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
          <Box 
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 0 }
          }}
          >
            <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: { xs: 'stretch', sm: 'flex-start' },
              textWrap: 'nowrap',
              width: { xs: '100%', sm: 'auto' },
              borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
              '&:active': {
                transform: 'scale(0.98)',
                backgroundColor: 'transparent',
              },
              '&:focus': {
                backgroundColor: 'transparent',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <IconButton sx={{ p: 0, mr: 1 }}><WebIcon /></IconButton>
            Live Preview
          </Button>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: { xs: 'stretch', sm: 'flex-start' },
              textWrap: 'nowrap',
              width: { xs: '100%', sm: 'auto' },
              borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
              '&:active': {
                transform: 'scale(0.98)',
                backgroundColor: 'transparent',
              },
              '&:focus': {
                backgroundColor: 'transparent',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <IconButton sx={{ p: 0, mr: 1 }}><GitHubIcon /></IconButton>
            View Code
          </Button>
          </Box>
          
        </Box>

        {/* Project Image Preview */}
       
      </Paper>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ py: 10, px: 2, backgroundColor: theme.palette.mode === 'dark' ? '#160d08' : '#F4F5FA' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Here are some of the major projects I have worked on, showcasing my skills and experience.
          </Typography>

          <Grid container spacing={6}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <ProjectItem project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

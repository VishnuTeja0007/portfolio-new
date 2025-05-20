import React from 'react';
import { Box, Container, Typography, Grid,IconButton, Card, CardContent, CardActions, Button, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import your project images from the @assets/projects folder
import snap from '../assets/projects/snappycelebrations.png';
import chat from '../assets/projects/chatapp.png';
import cf from '../assets/projects/cookingfever.png';
import speed from '../assets/projects/speedcontrol.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
// Placeholder project data - Replace with your actual project details and image imports
const projects = [
  {
    title: 'Project 1',
    description: 'A detailed description of Project 1, highlighting its key features and technologies used.',
    image: chat, // Uncomment and use your imported image variable
    tags: ['Web Design', 'Development'],
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'A detailed description of Project 2, highlighting its key features and technologies used.',
    image: snap, // Uncomment and use your imported image variable
    tags: ['Mobile App', 'UI/UX'],
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'A detailed description of Project 3, highlighting its key features and technologies used.',
    image: cf, // Uncomment and use your imported image variable
    tags: ['Game Development', 'Unity'],
    link: '#'
  },
  {
    title: 'Project 4',
    description: 'A detailed description of Project 4, highlighting its key features and technologies used.',
    image: speed, // Uncomment and use your imported image variable
    tags: ['Data Science', 'Machine Learning'],
    link: '#'
  },
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
          backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#ffffff',
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
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
          >
            <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: 'flex-start',
              borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
            }}
          >
            <IconButton><WebIcon></WebIcon></IconButton>
            Live Preview
          </Button>
           <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              alignSelf: 'flex-start',
              borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
            }}
          >
                        <IconButton><GitHubIcon></GitHubIcon></IconButton>

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

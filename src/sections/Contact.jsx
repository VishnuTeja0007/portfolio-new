// ContactSection.jsx
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  useTheme,
  Container,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  LinkedIn,
  GitHub,
  Instagram,
} from '@mui/icons-material';

const ContactSection = ({ mode }) => {
  const theme = useTheme();
  const isDark = mode === 'dark';

  return (
    <Container
      maxWidth="xl"
      id="contact"
      sx={{
        bgcolor: "#000000",
        color:" #ffffff",
        py: 4,
        px: 4,
        transition: 'all 0.3s ease',
        borderRadius:0
      }}
    >
      {/* <Typography variant='h4' fontWeight="bold" mb="2">Contact Me</Typography> */}
    
        {/* Contact Info */}
        <Box
        sx={{
          display:"flex",
          pr:6,
          flexDirection:{xs:"column",md:"row"},
          width:"100%",
          alignItems:"center",
          bgcolor:"#000000",
          borderRadius:0,
          justifyContent:"space-between"
        }}
        >
        {/* Contact Form */}
        {/* <Grid item xs={12} md={6}> */}
          {/* <Paper elevation={3} sx={{ p: 3, borderRadius:0, bgcolor: theme.palette.background.paper }}> */}
          
    <Box
      sx={{
        px: { xs: 3, sm: 4, md: 8 },
        py: 6,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderRadius:0,
        boxShadow: 3,
        maxWidth: 500,
        mx: "auto"
      }}
    >
      <Typography variant="overline" color="text.secondary" gutterBottom>
        GET IN TOUCH
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Let’s Discuss Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Get in touch with us for any kind of help. We are here to give you the
        best and also here to help you to find your projects.
      </Typography>

      
          <TextField
            fullWidth
            size='small'
            sx={
              {
                mb:"20px",
                borderRadius:0,
              }
            }
            variant="outlined"
            label="Name *"
          
          />
        
          <TextField
            fullWidth
            size='small'
            sx={
              {
                mb:"20px",
                borderRadius:0,
              }
            }
            variant="outlined"
            label="Email *"
          
          />
        
          <TextField
            fullWidth
            size='small'
            sx={
              {
                mb:"20px",
                borderRadius:0,
              }
            }
            variant="outlined"
            label="Subject *"
          
          />
        
      
          <TextField
            fullWidth
            size='small'
            sx={
              {
                mb:"20px",
                borderRadius:0,
              }
            }
            variant="outlined"
            label="Your message *"
            multiline
            rows={6}
          
          />
        
      
    </Box>

          {/* </Paper> */}
        {/* </Grid> */}
          {/* <Paper elevation={3} sx={{ p: 3,borderRadius:0, bgcolor: theme.palette.background.paper }}> */}
        <Box
        component="div"
        sx={{
          display:"flex",
          p:4,
          flexDirection:"column",
          alignItems:"space-between",
          justifyContent:"center",
          gap:6,
          bgcolor: theme.palette.background.paper
        }}
        >
          <Box
          component="div"
          sx={{
            bgcolor:"#000000",
            color:'white',
            p:3,
          }}
          >
            
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant='h6'>Anantapur, Andhra Pradesh, India</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant='h6' >+91 98765 43210</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant='h6' >your.email@example.com</Typography>
            </Box>
            <Box>
              <IconButton href="https://linkedin.com/in/yourprofile" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://github.com/yourprofile" target="_blank">
                <GitHub />
              </IconButton>
              <IconButton href="https://instagram.com/yourprofile" target="_blank">
                <Instagram />
              </IconButton>
            </Box>
   </Box>
          {/* </Paper> */}
 <Box
        sx={{
          width: '100%',
          height: 300,
          mb: 4,
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>



</Box>
                  </Box>
    </Container>
  );
};

export default ContactSection;

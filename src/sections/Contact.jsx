// ContactSection.jsx
import React, { useRef, useState } from 'react';
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
  Snackbar,
  Alert,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  LinkedIn,
  GitHub,
  WhatsApp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = ({ mode }) => {
  const theme = useTheme();
  const isDark = mode === 'dark';
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateIDUser = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
  const templateIDMe = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ME;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email to user
      await emailjs.sendForm(
        serviceID,
        templateIDUser,
        formRef.current,
        publicKey,
      
      );

      // Send email to yourself
      await emailjs.sendForm(
        serviceID,
        templateIDMe,
        formRef.current,
        publicKey,
        
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });

      // Reset form
      // console.log(formRef.current.user_name.value)
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Container
      maxWidth="xl"
      id="contact"
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? "#000000" : "#f5f5f5",
        color: theme.palette.mode === 'dark' ? "#ffffff" : "#000000",
        py: 8,
        px: { xs: 2, md: 6 },
        transition: 'all 0.3s ease',
        borderRadius: 0
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            color="primary" 
            sx={{ 
              letterSpacing: 2,
              mb: 1,
              display: 'block'
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography 
            variant="h3" 
            fontWeight={700}
            sx={{ 
              mb: 2,
              background: theme.palette.mode === 'dark' 
                ? 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)'
                : 'linear-gradient(45deg, #000 30%, #333 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Contact Me
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px',
              mx: 'auto',
              mb: 2
            }}
          >
            Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp} style={{ flex: { md: "0 0 60%" }, maxWidth: { md: "700px" } }}>
            <Box
              id="contact-form"
              sx={{
                px: { xs: 3, sm: 4 },
                py: 5,
                bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
                color: theme.palette.text.primary,
                borderRadius: '8px',
                boxShadow: theme.palette.mode === 'dark' 
                  ? '0 4px 20px rgba(0,0,0,0.1)'
                  : '0 4px 20px rgba(0,0,0,0.05)',
                border: theme.palette.mode === 'dark' 
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant="overline" color="primary" gutterBottom sx={{ letterSpacing: 2 }}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 1 }}>
                Let's Discuss in Detail
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Get in touch with me for any kind of help. I am here to give you the
                best and also here to help you to showcase my skills.
              </Typography>

              <form ref={formRef} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  size='small'
                  name="user_name"
                  sx={{
                    mb: 2.5,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(0, 0, 0, 0.02)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                      '&.Mui-focused': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(0, 0, 0, 0.06)',
                      },
                    },
                  }}
                  variant="outlined"
                  label="Name"
                  required
                />
                <TextField
                  fullWidth
                  size='small'
                  name="user_email"
                  sx={{
                    mb: 2.5,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(0, 0, 0, 0.02)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                      '&.Mui-focused': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(0, 0, 0, 0.06)',
                      },
                    },
                  }}
                  variant="outlined"
                  label="Email"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  size='small'
                  name="subject"
                  sx={{
                    mb: 2.5,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(0, 0, 0, 0.02)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                      '&.Mui-focused': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(0, 0, 0, 0.06)',
                      },
                    },
                  }}
                  variant="outlined"
                  label="Subject"
                  required
                />
                <TextField
                  fullWidth
                  size='small'
                  name="message"
                  sx={{
                    mb: 2.5,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.02)'
                        : 'rgba(0, 0, 0, 0.02)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.04)'
                          : 'rgba(0, 0, 0, 0.04)',
                      },
                      '&.Mui-focused': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'rgba(0, 0, 0, 0.06)',
                      },
                    },
                  }}
                  variant="outlined"
                  label="Your message"
                  multiline
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 0,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Box>
          </motion.div>

          {/* Contact Details */}
          <motion.div variants={fadeInUp} style={{ flex: { md: "0 0 40%" } }}>
            <Box
              id='contact-details'
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
                    p: 4,
                    borderRadius: '8px',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 4px 20px rgba(0,0,0,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.05)',
                    border: theme.palette.mode === 'dark' 
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant='h6' sx={{ fontWeight: 500 }}>Anantapur, Andhra Pradesh, India</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <Phone sx={{ mr: 2, color: 'primary.main' }} />
                    <Typography variant='h6' sx={{ fontWeight: 500 }}>+91 6302272812</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                    <Email sx={{ mr: 2, color: 'primary.main', flexShrink: 0 }} />
                    <Typography 
                      variant='h6' 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.9rem', sm: '1.25rem' },
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word'
                      }}
                    >
                      vishnuteja98765@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <IconButton 
                      href="www.linkedin.com/in/vishnu-teja-cheepati-055244252" 
                      target="_blank"
                      sx={{ 
                        mr: 2,
                        '&:hover': { transform: 'translateY(-2px)' },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton 
                      href="https://github.com/VishnuTeja0007" 
                      target="_blank"
                      sx={{ 
                        mr: 2,
                        '&:hover': { transform: 'translateY(-2px)' },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton 
                      href="https://wa.me/916302272812" 
                      target="_blank"
                      sx={{ 
                        '&:hover': { transform: 'translateY(-2px)' },
                        transition: 'all 0.3s ease',
                        color: '#25D366'
                      }}
                    >
                      <WhatsApp />
                    </IconButton>
                  </Box>
                </Box>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    width: '100%',
                    height: 280,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'dark' 
                      ? '0 4px 20px rgba(0,0,0,0.1)'
                      : '0 4px 20px rgba(0,0,0,0.05)',
                    border: theme.palette.mode === 'dark' 
                      ? '1px solid rgba(255, 255, 255, 0.1)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                    p: 2,
                    bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#ffffff',
                    '& iframe': {
                      borderRadius: '8px',
                    }
                  }}
                >
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3864.283296774463!2d77.7204816749454!3d14.410825686053329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI0JzM5LjAiTiA3N8KwNDMnMjMuMCJF!5e0!3m2!1sen!2sin!4v1747751417597!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Box>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactSection;

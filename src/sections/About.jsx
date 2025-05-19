import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Grid,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Tech - Jawaharlal Nehru Technological University, Anantapur (JNTUA)",
    year: "2020 – 2024",
    marks: "CGPA: 8.65",
    description: "Electrical and Electronics Engineering",
    locationLink:
      "https://www.google.com/maps/place/JNTUA+Anantapur/",
  },
  {
    title: "EAMCET Exam",
    year: "2020",
    marks: "Rank: 8311",
    description: "Competitive engineering entrance exam",
    locationLink:
      "https://www.sche.ap.gov.in/",
  },
  {
    title: "Intermediate - Sai Krupa Jr. College, Dharmavaram, Anantapur",
    year: "2018 – 2020",
    marks: "964/1000 (MPC)",
    description: "Focused on Mathematics and Physics",
    locationLink:
      "https://goo.gl/maps/4xPnH65Xm2N2", // example link to Narayana Jr. College
  },
  {
    title: "10th - Sadhana E.M. High School, Dharmavaram, Anantapur",
    year: "2017 – 2018",
    marks: "GPA: 10",
    description: "Top performer in class",
    locationLink:
      "https://goo.gl/maps/bU3kWj6r8bD2", // example link to Sri Chaitanya High School
  },
];

const About = () => {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{ py: 10, px: 2, backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I'm Vishnu Teja, a full stack developer with a strong foundation in web technologies,
            passionate about turning ideas into clean, scalable code. With a background in Electrical
            Engineering and a knack for problem-solving, I bring discipline and creativity to development.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            During my B.Tech at JNTUA, I deeply explored Electrical and Electronics Engineering concepts,
            gaining hands-on experience in circuit design, control systems, and embedded systems. I
            also sharpened my programming skills and learned to approach technical challenges with
            analytical thinking.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            In Intermediate at Narayana Jr. College, I focused on Mathematics, Physics, and Chemistry,
            building a strong foundation that supported my engineering studies later on. This phase
            taught me the value of discipline and consistent effort.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            My 10th class at Sri Chaitanya High School was a formative time where I developed strong
            study habits and achieved top marks, which motivated me to pursue excellence throughout
            my academic career.
          </Typography>
        </Box>
      </motion.div>
      <Divider sx={{ my: 6 }} />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Education Timeline
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {educationData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              {index < educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    boxShadow: 2,
                    mb: 3,
                    width: "100%", // Ensure it takes full width
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Link
                        href={item.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Location for ${item.title}`}
                      >
                        <IconButton color="primary" size="small">
                          <LocationOnIcon />
                        </IconButton>
                      </Link>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    <strong>Year:</strong> {item.year}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Marks:</strong> {item.marks}
                  </Typography>
                </Box>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
 
    </Box>
  );
};

export default About;

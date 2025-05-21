
import React from "react";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { Download, ContactMail, Menu } from "@mui/icons-material";

const FloatingActionButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Put your actual resume path in `public/`
    link.download = "VishnuTeja_Resume.pdf";
    link.click();
  };

  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SpeedDial
      ariaLabel="Floating Action Button"
      sx={{ position: "fixed", bottom: 24, right: 24 }}
      icon={<Menu />}
      direction="up"
    >
      <SpeedDialAction
        icon={<Download />}
        tooltipTitle="Download Resume"
        onClick={handleDownload}
      />
      <SpeedDialAction
        icon={<ContactMail />}
        tooltipTitle="Contact Me"
        onClick={handleContactScroll}
      />
    </SpeedDial>
  );
};

export default FloatingActionButton;

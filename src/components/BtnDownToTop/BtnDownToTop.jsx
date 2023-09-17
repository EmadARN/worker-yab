import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ArrowUpward } from "@mui/icons-material";

const BtnDownToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
        position: "fixed",

        top: "600px",

        display: visible ? "inline" : "none",
        zIndex: "999",
      }}
      onClick={scrollToTop}
    >
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: " #fdbe33",
          color: "#030f27",

          "&:hover": {
            backgroundColor: " #030f27",
            color: "#fdbe33",
          },
        }}
      >
        <ArrowUpward />
      </Fab>
    </Box>
  );
};

export default BtnDownToTop;

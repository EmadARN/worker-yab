import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ArrowUpward } from "@mui/icons-material";

const BtnDownToTop = ({ minScroll, maxScroll }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > minScroll) {
      setVisible(true);
    } else if (scrolled <= maxScroll) {
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
        top: "70%",
        bottom: { xs: "50%", md: "65%" },

        display: `${visible ? "inline" : "none"}`,

        zIndex: "999",
      }}
      onClick={scrollToTop}
    >
      <Box
        aria-label="add"
        sx={{
          p: 1.5,

          backgroundColor: " #fdbe33",
          border: "1px solid #030f27",
          borderRadius: "4px",
          color: "#030f27",
          display: { xs: "none", md: "inline-flex" },

          cursor: "pointer",
          "&:hover": {
            backgroundColor: " #030f27",
            color: "#fdbe33",
          },
        }}
      >
        <ArrowUpward />
      </Box>
    </Box>
  );
};

export default BtnDownToTop;

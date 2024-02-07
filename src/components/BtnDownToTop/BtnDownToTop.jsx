import React, { useState } from "react";
import Box from "@mui/material/Box";

import { ArrowUpward } from "@mui/icons-material";
import { BtnDownToTop_Box1, BtnDownToTop_Box2 } from "./style";

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
    <Box sx={BtnDownToTop_Box1(visible)} onClick={scrollToTop}>
      <Box aria-label="add" sx={BtnDownToTop_Box2}>
        <ArrowUpward />
      </Box>
    </Box>
  );
};

export default BtnDownToTop;

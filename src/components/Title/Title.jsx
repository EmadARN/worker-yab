import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { BoxStyle, TypographyStyle } from "./style";
const SectionTittle = styled("div")(({ theme }) => ({
  margin: "50px",
}));
const Title = ({ title, width }) => {
  return (
    <div>
      <SectionTittle>
        <Box sx={BoxStyle(width)}>
          <Typography sx={TypographyStyle}>{title}</Typography>
        </Box>
      </SectionTittle>
    </div>
  );
};

export default Title;

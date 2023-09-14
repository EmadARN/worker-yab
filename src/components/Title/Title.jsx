import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
const SectionTittle = styled("div")(({ theme }) => ({
  margin: "50px",
}));
const Title = ({ title }) => {
  return (
    <div>
      <SectionTittle sx={{}}>
        <Box
          sx={{
            textAlign: "center",
            width: "200px",
            position: "relative",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lalezar",
              position: "absolute",
              fontSize: "28px",
              whiteSpace: { xs: "wrap", md: "nowrap" },
              "&::before": {
                content: '""',
                position: "absolute",
                right: "-55px",
                top: " 20px",
                width: "50px",
                height: "4px",
                backgroundColor: "#fdbe33",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: "-56px",
                top: " 20px",
                width: "50px",
                height: "4px",
                backgroundColor: "#fdbe33",
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      </SectionTittle>
    </div>
  );
};

export default Title;

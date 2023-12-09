import React from "react";
import AboutTitle from "./about title/About Title";
import { Grid } from "@mui/material";
import AboutImage from "./aboutImage/AboutImage";

const About = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        mt: { xs: "0%", md: "10%" },
        display: "flex",
        flexDirection: {
          md: "row",
        },
      }}
    >
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        <AboutTitle />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        sx={{ display: "grid", placeItems: "center" }}
      >
        <AboutImage />
      </Grid>
    </Grid>
  );
};

export default About;

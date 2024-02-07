import React from "react";
import AboutTitle from "./about title/About Title";
import { Grid } from "@mui/material";
import AboutImage from "./aboutImage/AboutImage";
import {About_G1, About_G2} from "./style";

const About = () => {
  return (
    <Grid
      container
      xs={12}
      sx={About_G1}
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
        sx={About_G2}
      >
        <AboutImage />
      </Grid>
    </Grid>
  );
};

export default About;

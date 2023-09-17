import React from "react";
import AboutTitle from "./about title/About Title";
import { Grid } from "@mui/material";
import AboutImg from "./about img/About Img";

const About = () => {
  return (
    <Grid container xs={12} sx={{ mt: { xs: "12%", md: "10%" } }}>
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
        sx={{ mr: { xs: "400px", sm: "40px", md: "0", lg: "0", xl: "0" }}}
      >
        <AboutImg />
      </Grid>
    </Grid>
  );
};

export default About;

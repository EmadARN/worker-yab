import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import OurService from "../components/OurService/OurService";
import { Grid } from "@mui/material";
import ImageSlider from "../components/carousel/ImageSlider";
import Fact from "../components/Fact/Fact";
import About from "../components/About/About";
import FAQs from "../components/faqs/FAQs";

const ServicesPage = () => {
  return (
    <>
      <TopBarCss />
      <Grid  container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={10} md={8} sx={{ margin: "70px auto" }}>
            <OurService />
          </Grid>
          <Grid item xs={10} md={8} sx={{ margin: " auto" }}>
            <FAQs />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesPage;

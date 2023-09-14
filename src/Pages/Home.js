import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import BtnAnimation from "../components/BtnAnimation/BtnAnimation";
import OurService from "../components/OurService/OurService";
import { Container, Grid } from "@mui/material";
import ImageSlider from "../components/carousel/ImageSlider";
import Fact from "../components/Fact/Fact";
import About from "../components/About/About";
import FAQs from "../components/faqs/FAQs";

const Home = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid xs={12}>
            <ImageSlider />
          </Grid>
          <Grid xs={12} sx={{ mt: 10 }}>
            <About />
          </Grid>
          <Grid xs={12} sx={{ mt: 10 }}>
            <Fact scroll="1500" />
          </Grid>
          <Grid xs={10} md={8} sx={{ margin: "70px auto" }}>
            <OurService />
          </Grid>
          <Grid xs={10} md={8} sx={{ margin: " auto" }}>
            <FAQs />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

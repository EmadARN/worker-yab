import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import OurService from "../components/OurService/OurService";
import { Grid } from "@mui/material";
import ImageSlider from "../components/carousel/ImageSlider";
import Fact from "../components/Fact/Fact";
import About from "../components/About/About";
import FAQs from "../components/faqs/FAQs";
import { Footer } from "../components/Footer/Footer";
import BtnDownToTop from "../components/BtnDownToTop/BtnDownToTop";

const ServicesPage = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={10} md={8} sx={{ margin: "70px auto" }}>
            <OurService />
          </Grid>
          <BtnDownToTop minScroll={100} maxScroll={50} />
          <Grid item xs={10} md={8} sx={{ margin: " auto", mb: 20 }}>
            <FAQs />
          </Grid>
        </Grid>
        <Footer
          page1={"درباره ما"}
          page2={"ارتباط با ما"}
          page3={"خدمات"}
          services1={"خدمات مکانیکی"}
          services2={"کارگران ساختمانی"}
          address={"اعتمادیه.خیابان اول عربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};

export default ServicesPage;

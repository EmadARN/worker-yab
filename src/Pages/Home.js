import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import BtnAnimation from "../components/BtnAnimation/BtnAnimation";
import OurService from "../components/OurService/OurService";
import { Button, Container, Grid } from "@mui/material";
import ImageSlider from "../components/carousel/ImageSlider";
import Fact from "../components/Fact/Fact";
import About from "../components/About/About";
import FAQs from "../components/faqs/FAQs";
import { Footer } from "../components/Footer/Footer";
import TableMain from "../components/Table/TableMain";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Link from "@mui/material/Link/Link";
import BtnDownToTop from "../components/BtnDownToTop/BtnDownToTop";
import personImg1 from "../Asset/image/testimonial-2.jpg";
import personImg2 from "../Asset/image/testimonial-3.jpg";
const Home = () => {
  return (
    <>
      <TopBarCss />

      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={12} sx={{ height: { xs: "10%", md: "15%" } }}>
            <ImageSlider />
          </Grid>
          <Grid item xs={12}>
            <About />
          </Grid>
          <BtnDownToTop />
          <Grid item xs={12} sx={{ mt: 10 }}>
            <Fact scroll="1500" />
          </Grid>

          <Grid item xs={10} md={8} sx={{ margin: "150px auto" }}>
            <TableMain
              row={[
                {
                  firstName: "محمد",
                  lastName: "رضایی",
                  img: personImg1,
                  job: "بنا",
                  workExprience: "10 سال",
                  number: "0910444444",
                },

                {
                  firstName: "علی",
                  lastName: "محمدی",
                  img: personImg2,
                  job: "مکانیک",
                  workExprience: "5 سال",
                  number: "0912456854",
                },
              ]}
            />
          </Grid>
          <Grid item xs={10} md={8} sx={{ margin: "70px auto" }}>
            <OurService />
          </Grid>
          <Grid item xs={10} md={8} sx={{ margin: "150px auto" }}>
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

export default Home;

import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import BtnAnimation from "../components/BtnAnimation/BtnAnimation";
import OurService from "../components/OurService/OurService";
import { Container, Grid } from "@mui/material";
import Carousel1 from "../components/carousel/Carousel";

const Home = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid xs={2} >
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid xs={12} md={12} sx={{ width: "100%", height: "100%" }}>
            <Carousel1
              describtion={[
                {
                  id: 1,
                  text: "کارگران حرفه ای",
                  title: "خانه رویایی خود رت به ما بسپرید",
                  image:
                    "https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg",
                },
                {
                  id: 2,
                  text: "ماقابل اعتماد هستیم",
                  title: "خانه ی شما را میسازیم",
                  image:
                    "https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg",
                },
                {
                  id: 3,
                  text: "سازندگان حرفه ای",
                  title: "پروژه های خود را به ما بسپارید",
                  image:
                    "https://initiafy-website-images.s3.amazonaws.com/wordpress-upload/2015/06/Canada-New-Worker-Safety-group-of-workers.jpg",
                },
              ]}
            />
          </Grid>
          <Grid xs={10} md={10} sx={{ margin: "auto" }}>
            <OurService />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

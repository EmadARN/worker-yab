import React from "react";
import TopBarCss from "../Components/topbarcss/TopBarCss";
import RightBar from "../Components/RightBar/RightBar";
import BtnAnimation from "../Components/BtnAnimation/BtnAnimation";
import OurService from "../Components/OurService/OurService";
import { Container, Grid } from "@mui/material";
import Carousel1 from "../Components/carousel/Carousel";

const Home = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid xs={10} md={12}>
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
        {/* <Grid
          xs={10}
          md={6}
          sx={{
            maxWidth: { md: "1200px" },
            pr: { xs: 5, sm: 10, md: 5, lg: 22 },

            pl: { xs: 5, sm: 10, md: 0 },
          }}
        >
          <OurService />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Home;

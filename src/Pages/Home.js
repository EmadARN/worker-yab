import React from "react";
import TopBarCss from "../Components/topbarcss/TopBarCss";
import RightBar from "../Components/RightBar/RightBar";
import BtnAnimation from "../Components/BtnAnimation/BtnAnimation";
import OurService from "../Components/OurService/OurService";
import { Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid xs={2}>
          <RightBar />
        </Grid>

        <Grid
          xs={10}
          md={6}
          sx={{
            maxWidth: { md: "1200px" },
            pr: { xs: 5, sm: 10, md: 5, lg: 22 },

            pl: { xs: 5, sm: 10, md: 0 },
          }}
        >
          <OurService />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

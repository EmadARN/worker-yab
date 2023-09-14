import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import BtnAnimation from "../components/BtnAnimation/BtnAnimation";
import OurService from "../components/OurService/OurService";
import { Container, Grid } from "@mui/material";
import ImageSlider from '../components/carousel/ImageSlider'







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


          
          <Grid xs={10} md={10} sx={{ margin: "auto" }}>
            <OurService />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

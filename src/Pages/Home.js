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
import {Footer} from '../components/Footer/Footer'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from "@mui/material/Link/Link";

const Home = () => {
  return (
    <>
      <TopBarCss />
      <Grid container >
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid xs={12} sx={{height:"20%"}}>
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


        <Link sx={{mt:"10%",background:"#315CFD",borderRadius:"50%"}} href="#">  <Button ><ArrowUpwardIcon sx={{color:'white',fontSize:"25px"}}/></Button></Link>

        <Footer
         page1 = {"درباره ما"}
         page2={"ارتباط با ما"}
         page3={"خدمات"}
         services1={"خدمات مکانیکی"}
         services2={"کارگران ساختمانی"}
         address={'اعتمادیه.خیابان اول عربی'}
         phNumber={"0919123456"}
         email={"test1@gmail.com"}
 
        />


     
      </Grid>
    
    </>
  );
};

export default Home;

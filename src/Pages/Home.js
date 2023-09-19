import React, {useEffect, useState} from "react";
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
import axios from "axios";
import {IPServer} from "../Config/Server";





const Home = () => {

  const [table_Row, setTable_Row] = useState([])
  const [apiStatus, setAPI_status] = useState(false)


  useEffect(()=>{
    axios.request({

      headers:{

        Authorization: 'Barear 1'

      },

      method: 'GET',

      url:`${IPServer}/UserInf/user/list/`

    }).then((res)=>{

      setTable_Row(res.data.data)
    })

    if (apiStatus === false){

      setAPI_status(true)

    }

  }, [apiStatus])

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
          <BtnDownToTop minScroll={2000} maxScroll={1000} />
          <Grid item xs={12} sx={{ mt: 10 }}>
            <Fact scroll="1000" account_number={table_Row.length}/>
          </Grid>

          <Grid item xs={12} md={8} sx={{ margin: "150px auto" }}>
            <TableMain
              row={table_Row}
            />
          </Grid>
          <Grid item xs={10} md={8} sx={{ margin: "70px auto" }}>
            <OurService />
          </Grid>
          <Grid
            item
            xs={10}
            md={8}
            sx={{ mx: " auto", mb: { xs: 40, md: 10 } }}
          >
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

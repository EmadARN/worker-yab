import React, { useEffect, useState } from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import { Button, Grid } from "@mui/material";
import ImageSlider from "../components/carousel/ImageSlider";
import Fact from "../components/Fact/Fact";
import About from "../components/About/About";
import FAQs from "../components/faqs/FAQs";
import { Footer } from "../components/Footer/Footer";
import TableMain from "../components/Table/TableMain";
import { Link } from "react-router-dom";
import BtnDownToTop from "../components/BtnDownToTop/BtnDownToTop";
import axios from "axios";
import { IPServer } from "../Config/Server";
import { HomeBtnStyle } from "../styles/style";

const Home = () => {
  const [table_Row, setTable_Row] = useState([]);
  const [apiStatus, setAPI_status] = useState(false);

  useEffect(() => {
    axios
      .request({
        headers: {
          Authorization: "Barear 1",
        },

        method: "GET",

        url: `${IPServer}/UserInf/user/list/`,
      })
      .then((res) => {
        setTable_Row(res.data.dataSummary);
      });

    if (apiStatus === false) {
      setAPI_status(true);
    }
  }, [apiStatus]);

  return (
    <>
      <Grid xs={12}>
        <TopBarCss />
        <Grid container>
          <Grid item xs={2}>
            <RightBar minScroll={2460} maxScroll={2490} />
          </Grid>
          <Grid container xs={10} md={12}>
            <Grid item xs={12} sx={{}}>
              <ImageSlider />
            </Grid>
            <Grid item xs={12} mt={10}>
              <About />
            </Grid>
            <BtnDownToTop minScroll={2000} maxScroll={1000} />
            <Grid item xs={12} mt={15}>
              <Fact scroll="1000" account_number={table_Row.length} />
            </Grid>

            <Grid item xs={12} md={8} my={"150px"} mx={"auto"}>
              <TableMain
                row={table_Row}
                title="ثبت نامی ها اخیر"
                width={"200px"}
                xsWidth={"100px"}
                display={"none"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              ml={1.5}
            >
              <Link to={"/allWorker"}>
                <Button variant="contained" sx={HomeBtnStyle}>
                  بازدید همه سرویس ها
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={10}
              md={8}
              m={"auto"}
              mt={11}
              mb={{ xs: 20, md: 20 }}
            >
              <FAQs />
            </Grid>
          </Grid>
          <Footer
            page1={"درباره ما"}
            page3={"خدمات"}
            address={"اعتمادیه.خیابان اول عربی"}
            phNumber={"0919123456"}
            email={"test1@gmail.com"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

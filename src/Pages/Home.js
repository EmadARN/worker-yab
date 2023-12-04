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
            <RightBar />
          </Grid>
          <Grid container xs={10} md={12}>
            <Grid item xs={12} sx={{}}>
              <ImageSlider />
            </Grid>
            <Grid item xs={12} mt={10}>
              <About />
            </Grid>
            <BtnDownToTop minScroll={2000} maxScroll={1000} />
            <Grid item xs={12} sx={{ mt: 15 }}>
              <Fact scroll="1000" account_number={table_Row.length} />
            </Grid>

            <Grid item xs={12} md={8} sx={{ margin: "150px auto" }}>
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
              sx={{ display: "flex", justifyContent: "center", ml: 1.5 }}
            >
              <Link to={"/allWorker"}>
                <Button
                  variant="contained"
                  sx={{
                    px: 6,
                    height: "60px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    transition: ".5s",
                    borderRadius: "2px",
                    p: "15px 35px",
                    color: "#030f27",

                    bgcolor: "#fdbe33",

                    fontFamily: "Lalezar",
                    animation: "span1 3s 2s  ease-in-out infinite  alternate",
                    "&:hover": {
                      bgcolor: "transparent",
                    },
                    "@keyframes span1": {
                      "0%": {
                        transform: "scaleX(80%)",
                      },
                      "100%": {
                        transform: " scaleX(100%)",
                        bgcolor: "#030f27",
                        color: "#fdbe33",
                      },
                    },
                  }}
                >
                  بازدید همه سرویس ها
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={10}
              md={8}
              sx={{
                m: "auto",
                mt: 11,
                mb: { xs: 20, md: 20 },
              }}
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

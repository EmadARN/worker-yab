import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import Box from "@mui/material/Box";
import { Grid, TextField } from "@mui/material";
import SignUpForm from "../components/SignUpItems/SignUpForm/SignUpForm";
import SignUpImage from "../components/SignUpItems/SignUpImage/SignUpImage";
import RightBar from "../components/RightBar/RightBar";
import { Footer } from "../components/Footer/Footer";
import AllWorker from "../components/AllWorker/AllWorker";

const AllWorkerPage = () => {
  return (
    <>
      <TopBarCss />

      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={12} md={8} sx={{ margin: "150px auto" }}>
            <AllWorker />
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

export default AllWorkerPage;

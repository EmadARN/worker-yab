import React from "react";

import Stepper1 from "../components/SignUpItems/Stepper/Stepper";

import TopBarCss from "../components/topbarcss/TopBarCss";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import { Box, Grid } from "@mui/material";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import { Footer } from "../components/Footer/Footer";
import BackWardBtn from "../components/SignUpItems/BackWardBtn/BackWardBtn";

const SignUpPage2 = () => {
  return (
    <>
      <TopBarCss display="none" />
      <Grid container>
        <Stepper1 />
        <Grid xs={12} sx={{ margin: "auto" }}>
          <VerifyCode />
        </Grid>

        <Grid
          container
          sx={{
            width: "40%",
            margin: "auto",
            pr: { xs: 0, sm: 5, md: 12, lg: 15, xl: 20 },
          }}
        >
          <Grid xs={6} sx={{ my: 20 }}>
            <BtnSignUp />
          </Grid>
          <Grid container xs={6} sx={{ my: 20 }}>
            <BackWardBtn navigate={"/SignUpPage"} />
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

export default SignUpPage2;

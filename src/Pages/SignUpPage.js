import React from "react";

import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import VerifyNumber from "../components/SignUpItems/SignUp(VerifyNumber)/VerifyNumber";
import TopBarCss from "../components/topbarcss/TopBarCss";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import { Box, Grid } from "@mui/material";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import { Footer } from "../components/Footer/Footer";

const SignUpPage = () => {
  return (
    <>
      <TopBarCss display="none" />
      <Grid container>
        <Stepper1 />
        <Grid xs={12} sx={{ margin: "auto" }}>
          <VerifyNumber />
        </Grid>

        <Grid xs={12} sx={{ margin: "auto", my: 20 }}>
          {" "}
          <BtnSignUp />
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

export default SignUpPage;

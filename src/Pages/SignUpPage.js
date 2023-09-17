import React from "react";

import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import VerifyNumber from "../components/SignUpItems/SignUp(VerifyNumber)/VerifyNumber";
import TopBarCss from "../components/topbarcss/TopBarCss";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import { Box } from "@mui/material";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";

const SignUpPage = () => {
  return (
    <>
      <TopBarCss display="none" />
      <Stepper1 />
      <VerifyCode />
      <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        {" "}
        <BtnSignUp />
      </Box>
    </>
  );
};

export default SignUpPage;

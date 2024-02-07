import React, { useState } from "react";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import { Footer } from "../components/Footer/Footer";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import { Grid } from "@mui/material";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import { Grid1 } from "../styles/style";

const SignUpPage2 = () => {
  const [verify_code, setVerify_code] = useState("");

  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Stepper1 stepID={0} />
          <Grid xs={12} m="auto">
            <VerifyCode
              set_verify_code={setVerify_code}
              verify_code={verify_code}
            />
          </Grid>

          <Grid container sx={Grid1}>
            <Grid container xs={6} my={"4"}></Grid>
          </Grid>
        </Grid>
        <Footer
          display="none"
          page1={"درباره ما"}
          page2={"ارتباط با ما"}
          page3={"خدمات"}
          address={"اعتمادیه.خیابان اول غربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};

export default SignUpPage2;

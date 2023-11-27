import React, { useState } from "react";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import BackWardBtn from "../components/SignUpItems/BackWardBtn/BackWardBtn";
import { Footer } from "../components/Footer/Footer";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import { Button, Grid } from "@mui/material";
import TopBarCss from "../components/topbarcss/TopBarCss";
import RightBar from "../components/RightBar/RightBar";
import axios from "axios";
import { IPServer } from "../Config/Server";
import { useLocation } from "react-router-dom";
import { message } from "antd";

const SignUpPage2 = () => {
  const [verify_code, setVerify_code] = useState("");
  let location = useLocation();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "در حال بارگیری ...",
        duration: 3,
        style: {
          fontSize: "18px",
        },
      })

      .then(() => message.success("عملبات با موفقیت انجام شد :)", 2.5));
  };

  // const handleCLick=()=>{

  //     axios
  //       .post(`${IPServer}/Auth/validate/signup/phone_number/`, {
  //         phone_number: location.state.phone_number,
  //         code: verify_code,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         // error is handled in catch block
  //         if (error.response) {
  //           // status code out of the range of 2xx
  //           console.log("Data :", error.response.data);
  //           console.log("Status :" + error.response.status);
  //         } else if (error.request) {
  //           // The request was made but no response was received
  //           console.log(error.request);
  //         } else {
  //           // Error on setting up the request
  //           console.log("Error", error.message);
  //         }
  //       });

  //       success();

  // }

  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Stepper1 />
          <Grid xs={12} sx={{ margin: "auto" }}>
            <VerifyCode
              set_verify_code={setVerify_code}
              verify_code={verify_code}
            />
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
              {contextHolder}
            </Grid>
            <Grid container xs={6} sx={{ my: 20 }}>
            
            </Grid>
          </Grid>
        </Grid>
        <Footer
          display="none"
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

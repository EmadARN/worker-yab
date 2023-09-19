import React, {useState} from "react";

import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import VerifyNumber from "../components/SignUpItems/SignUp(VerifyNumber)/VerifyNumber";
import TopBarCss from "../components/topbarcss/TopBarCss";
import BtnSignUp from "../components/SignUpItems/BtnSignUp/BtnSignUp";
import { Box, Grid } from "@mui/material";
import VerifyCode from "../components/SignUpItems/SignUp(VerifyCode)/VerifyCode";
import { Footer } from "../components/Footer/Footer";
import BackWardBtn from "../components/SignUpItems/BackWardBtn/BackWardBtn";
import RightBar from "../components/RightBar/RightBar";
import axios from "axios";
import {IPServer} from "../Config/Server";

const SignUpPage = () => {
    const[phone_number,setPhone_number]=useState('')

  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar display={"none"} />
        </Grid>
        <Grid container xs={10} md={12}>
          <Stepper1 />
          <Grid xs={12} sx={{ margin: "auto" }}>
            <VerifyNumber inputValue={setPhone_number}/>
          </Grid>

          <Grid
            xs={6}
            sx={{
              margin: "auto",
              my: 20,
              pr: { xs: 5, sm: 15, md: 25, lg: 30, xl: 38 },
            }}
          >
            <BtnSignUp

                linkState={{phone_number: phone_number}}
                onClick={

                ()=> {
                    axios.request({



                        method: 'GET',

                        url: `${IPServer}/Auth/signup/phone_number=${phone_number}/`

                    }).then((res) => {

                        console.log(res.data)
                    })

                }



            } navigate={

                {
                    pathname: '/SignUpPage2',


                }

            } />
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

export default SignUpPage;

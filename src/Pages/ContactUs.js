import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import { Button, Grid, Typography } from "@mui/material";
import Contactus from "../components/Contact Us/Contact-us";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Footer } from "../components/Footer/Footer";
import RightBar from "../components/RightBar/RightBar";
import BtnDownToTop from "../components/BtnDownToTop/BtnDownToTop";

const ContactUs = (display) => {
  return (
    <>
      <TopBarCss />

      <Grid container xs={12}>
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={12} sm={12} md={12} sx={{}}>
            <Contactus
              data={[
                {
                  id: 1,
                  icon: <LocationOnIcon sx={{ fontSize: "35px" }} />,
                  title: "آدرس",
                  info: "زنجان اعتمادیه خیابان 12",
                },
                {
                  id: 2,
                  icon: <LocalPhoneIcon sx={{ fontSize: "35px" }} />,
                  title: "شماره تماس",
                  info: "12345678",
                },
                {
                  id: 3,
                  icon: <EmailIcon sx={{ fontSize: "35px" }} />,
                  title: "ایمیل",
                  info: "test@gmail.com",
                },
              ]}
            />
          </Grid>
        </Grid>
        <BtnDownToTop minScroll={50} maxScroll={20} />
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

export default ContactUs;

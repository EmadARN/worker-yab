import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import { Grid } from "@mui/material";
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
          <Grid item xs={12} md={8} mx={"auto"}>
            <AllWorker />
          </Grid>
          <Grid container my={21}></Grid>
        </Grid>
        <Footer
          display="none"
          page1={"درباره ما"}
          page2={"ارتباط با ما"}
          page3={"خدمات"}
          address={"اعتمادیه.خیابان اول عربی"}
          phNumber={"0919123456"}
          email={"test1@gmail.com"}
        />
      </Grid>
    </>
  );
};

export default AllWorkerPage;

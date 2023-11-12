import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import { Grid } from "@mui/material";
import RightBar from "../components/RightBar/RightBar";
import { Footer } from "../components/Footer/Footer";
import WorkerList from "../components/WorkerList/WorkerList";

const WorkerListPage = () => {
  return (
    <>
      <TopBarCss />

      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
          <Grid item xs={12} md={8} sx={{ margin: "150px auto" }}>
            <WorkerList />
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

export default WorkerListPage;

import React from "react";
import TopBarCss from "../components/topbarcss/TopBarCss";
import Stepper1 from "../components/SignUpItems/Stepper/Stepper";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import SignUpForm from "../components/SignUpItems/SignUpForm/SignUpForm";
import SignUpImage from "../components/SignUpItems/SignUpImage/SignUpImage";
import RightBar from "../components/RightBar/RightBar";
import { Footer } from "../components/Footer/Footer";

const SignUpPage3 = () => {
  return (
    <>
      <TopBarCss />
      <Grid container>
        <Grid item xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12} sx={{ marginBottom: "5%" }}>
          <Stepper1 stepID={1} />
          <Grid xs={12} sx={{ margin: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  xl={6}
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SignUpForm />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  xl={6}
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SignUpImage />
                </Grid>
              </Grid>
            </Box>
          </Grid>
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
export default SignUpPage3;

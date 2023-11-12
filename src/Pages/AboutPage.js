import AboutTitle from "../components/About/about title/About Title";
import { Grid } from "@mui/material";
import TopBarCss from "../components/topbarcss/TopBarCss";
import Fact from "../components/Fact/Fact";
import FAQs from "../components/faqs/FAQs";
import RightBar from "../components/RightBar/RightBar";
import { Footer } from "../components/Footer/Footer";
import BtnDownToTop from "../components/BtnDownToTop/BtnDownToTop";
import AboutImage from "../components/About/aboutImage/AboutImage";
function AboutPage() {
  return (
    <>
      <TopBarCss />
      <Grid container xs={12}>
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12} sx={{ mt: 10 }}>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <AboutTitle />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            sx={{ mr: { xs: "40px", sm: "40px", md: "0", lg: "0", xl: "0" } }}
          >
            <AboutImage />
          </Grid>
          <Grid item xs={12} sx={{ mt: 10 }}>
            <Fact scroll="200" />
          </Grid>
          <BtnDownToTop minScroll={100} maxScroll={50} />
          <Grid item xs={10} md={8} sx={{ margin: "100px auto" }}>
            <FAQs />
          </Grid>
        </Grid>
        <Footer
          display={"none"}
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
}

export default AboutPage;

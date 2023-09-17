import AboutTitle from "../components/About/about title/About Title";
import { Grid } from "@mui/material";
import AboutImg from "../components/About/about img/About Img";
import TopBarCss from "../components/topbarcss/TopBarCss";
import Fact from "../components/Fact/Fact";
import img1 from "../Asset/image/about.jpg";
import FAQs from "../components/faqs/FAQs";
import RightBar from "../components/RightBar/RightBar";
function AboutPage() {
  return (
    <>
      <TopBarCss />
      <Grid container xs={12}>
        <Grid xs={2}>
          <RightBar />
        </Grid>
        <Grid container xs={10} md={12}>
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
            <AboutImg imgs1={img1} />
          </Grid>
          <Grid item xs={12} sx={{ mt: 10 }}>
            <Fact scroll="200" />
          </Grid>

          <Grid item xs={10} md={8} sx={{ margin: "100px auto" }}>
            <FAQs />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutPage;

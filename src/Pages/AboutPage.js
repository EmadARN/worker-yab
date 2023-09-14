import AboutTitle from "../components/About/about title/About Title";
import { Grid } from "@mui/material";
import AboutImg from "../components/About/about img/About Img";
import TopBarCss from "../components/topbarcss/TopBarCss";
import Fact from "../components/Fact/Fact";
import img1 from "../Asset/image/about.jpg";
function AboutPage() {
  return (
    <>
      <TopBarCss />
      <Grid container xs={12}>
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
        <Fact scroll="200" />
      </Grid>
    </>
  );
}

export default AboutPage;

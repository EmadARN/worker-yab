import { Grid, Typography } from "@mui/material";
import AboutDesc from "../about desc/AboutDesc";

function AboutTitle() {
  return (
    <>
      <Grid container xs={12} sx={{ mt: 4 }}>
        <Grid item xs={8} sx={{ margin: " auto" }}>
          <Typography
            color="#fdbe33"
            sx={{
              fontSize: { xs: "22px", md: "30px" },
              fontWeight: { xs: "bolder", md: "bold" },
            }}
          >
            خوش آمدید به سازندگان
          </Typography>

          <Typography
            fontFamily="Lalezar"
            sx={{
              mt: 1.5,
              fontSize: { xs: "15px", md: "30px" },
              fontWeight: { xs: "500", md: "bold" },
            }}
          >
            5 سال سابقه کار تخصصی در قسمت فنی
          </Typography>

          <AboutDesc />
        </Grid>
      </Grid>
    </>
  );
}
export default AboutTitle;

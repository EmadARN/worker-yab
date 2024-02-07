import { Grid, Typography } from "@mui/material";
import AboutDesc from "../about desc/AboutDesc";
import {AboutTitle_T1, AboutTitle_T2} from "../style";

function AboutTitle() {
  return (
    <>
      <Grid container xs={12} my={4}>
        <Grid item xs={8} m="auto">
          <Typography
            color="#fdbe33"
            sx={AboutTitle_T1}
          >
            خوش آمدید به سازندگان
          </Typography>

          <Typography
            fontFamily="Lalezar"
            sx={AboutTitle_T2}
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

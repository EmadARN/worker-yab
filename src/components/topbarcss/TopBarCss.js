import { Grid, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import NavBar from "../NavBarCss/NavBar";
function TopBarCss({ display }) {
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{
          backgroundColor: "#fdbe33",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            textAlign: { xs: "center", sm: "center", md: "0" },
            mt: 3,
          }}
        >
          <Typography
            variant="h1"
            fontFamily="Lalezar"
            fontWeight="1.5"
            sx={{ fontSize: { xs: "50px", md: "80px" } }}
          >
            سازندگان
          </Typography>
        </Grid>

        <Grid
          container
          xs={4}
          sm={4}
          md={5}
          lg={6}
          xl={6}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            fontSize: { md: "25px", lg: "20px" },
            mt: 3,
          }}
        >
          <Grid item xs={4}>
            <CalendarMonthOutlinedIcon fontSize="large" />

            <Typography fontFamily="Lalezar">آدرس</Typography>

            <Typography fontFamily="Lalezar">زنجان , اعتمادیه</Typography>
          </Grid>

          <Grid item xs={4}>
            <ContactPhoneOutlinedIcon fontSize="large" />
            <Typography fontFamily="Lalezar">تماس با ما</Typography>

            <Typography fontFamily="Lalezar">0243332265</Typography>
          </Grid>

          <Grid item xs={4}>
            <ForwardToInboxOutlinedIcon fontSize="large" />
            <Typography fontFamily="Lalezar">ایمیل ما</Typography>

            <Typography fontFamily="Lalezar">info@gmail.com</Typography>
          </Grid>
        </Grid>
        <NavBar display={display} />
      </Grid>
    </>
  );
}

export default TopBarCss;

import { Button, Grid, Typography } from "@mui/material";

function AboutDesc() {
  return (
    <>
      <Grid>
        <Grid sx={{ margin: "10px auto" }}>
          <Typography
            sx={{ fontSize: "18px", color: "#6a6a6a", textAlign: "justify" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: "18px",
              color: "#6a6a6a",
              textAlign: "justify",
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود دشواری موجود در ارائه راهکارها و شرایط
            سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
            قرار گیرد.
          </Typography>

          <Button
            variant="contained"
            sx={{
              left: { xs: "10%", sm: "12%", md: "55%" },
              position: "absolute",
              transition: ".5s",
              borderRadius: "2px",
              p: "15px 35px",
              color: "#030f27",
              fontSize: "16px",
              bgcolor: "#fdbe33",
              fontWeight: "700",
              fontFamily: "Lalezar",
              "&:hover": {
                transition: "all .75s",
                p: "20px 40px",
                bgcolor: "#030f27",
                color: "#fdbe33",
                boxShadow:
                  "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            ادامه دیگر
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default AboutDesc;

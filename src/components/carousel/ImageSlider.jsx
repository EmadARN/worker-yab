
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SliderImg1 from "../../Asset/image/photo-1482731215275-a1f151646268.avif";
import SliderImg2 from "../../Asset/image/photo-1485083269755-a7b559a4fe5e.avif";
import SliderImg3 from "../../Asset/image/photo-1565954786194-d22abeaac3ae.avif";
import BtnAnimation from "../BtnAnimation/BtnAnimation";
import { Grid } from "@mui/material";
import "animate.css";
import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Bird",
    imgPath: SliderImg1,
    title: "خانه رویایی خود را به ما بسپرید",
    text: "کارگران حرفه ای",
  },
  {
    label: "Bali, Indonesia",
    imgPath: SliderImg2,
    title: "پروژه های خود را به ما بسپارید",
    text: "ماقابل اعتماد هستیم",
  },
  {
    label: "Goč, Serbia",
    imgPath: SliderImg3,
    title: "پروژه های خود را به ما بسپارید",
    text: "سازندگان حرفه ای",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1, position: "relative", }}>
      <Paper square elevation={0} sx={{}}></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "ltr" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ position: "relative" }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: "800px",
                  height: "100%",
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
            <Typography
              className="animate__animated animate__backInRight"
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#efefef",
                fontWeight: { xs: "bolder", md: "700" },
                fontSize: { xs: "12px", sm: "20px", md: "50px" },
                position: "absolute",
                top: { xs: "17%", md: "37%" },
                left: "30%",
                textAlign: "center",
                transform: "translate(-30.5%,-30%)",
              }}
            >
              {step.title}
            </Typography>
            <Typography
              className="animate__animated animate__backInLeft"
              variant="h4"
              sx={{
                textAlign: "center",
                color: { xs: "#333", md: "#efefef" },
                fontWeight: { xs: "bolder", md: "500" },
                fontSize: { xs: "18px", sm: "20px", md: "40px" },
                position: { xs: "static", md: "absolute" },
                top: "45.5%",
                left: "40.5%",
                transform: "translate(-37.5%,-45.5%)",
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              {step.text}
            </Typography>
            <Grid
              sx={{
                position: "absolute",
                width: { xs: "50%", md: "10%" },
                top: { xs: "50%", md: "60.5%" },
                left: "50%",
                transform: {
                  xs: "translate(-50%,-50%)",
                  md: "translate(-60.5%,-50%)",
                },
                textAlign: "center",
                zIndex: "999",
              }}
            >
              <Link   to={"/SignupPage"}>
              <BtnAnimation
                title="ثبت نام کارجو"
                color="white"
                size="18px"
                fweight="500"
              />
              </Link>
            </Grid>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ margin: "auto" }}
        // nextButton={
        //   <Button
        //     sx={{
        //       position: "absolute",
        //       top: "50%",
        //       right: "0",
        //     }}
        //     size="large"
        //     onClick={handleNext}
        //     disabled={activeStep === maxSteps - 1}
        //   >
        //     {theme.direction === "rtl" ? (
        //       <KeyboardArrowLeft />
        //     ) : (
        //       <KeyboardArrowRight sx={{ fontSize: "60px", color: "#fdbe33" }} />
        //     )}
        //   </Button>
        // }
        // backButton={
        //   <Button
        //     sx={{ position: "absolute", top: "50%", left: "0" }}
        //     size="small"
        //     onClick={handleBack}
        //     disabled={activeStep === 0}
        //   >
        //     {theme.direction === "rtl" ? (
        //       <KeyboardArrowRight />
        //     ) : (
        //       <KeyboardArrowLeft sx={{ fontSize: "60px", color: "#fdbe33" }} />
        //     )}
        //   </Button>
        // }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

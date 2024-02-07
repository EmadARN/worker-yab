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

import BtnAnimation from "../BtnAnimation/BtnAnimation";
import { Grid } from "@mui/material";
import "animate.css";
import { Link } from "react-router-dom";
import { images } from "./data";
import {
  ImageSlider_Box1,
  ImageSlider_Box2,
  ImageSlider_Box3,
  ImageSlider_Grid1,
  ImageSlider_Link1,
  ImageSlider_T1,
  ImageSlider_T2,
  ImageSlider_div1,
} from "./style";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    <Box sx={ImageSlider_Box1}>
      <Paper square elevation={0}></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "ltr" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={ImageSlider_div1}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box component="img" sx={ImageSlider_Box2} src={step.imgPath} />
            ) : null}
            <Typography
              className="animate__animated animate__backInRight"
              variant="h4"
              sx={ImageSlider_T1}
            >
              {step.title}
            </Typography>
            <Typography
              className="animate__animated animate__backInLeft"
              variant="h4"
              sx={ImageSlider_T2}
            >
              {step.text}
            </Typography>
            <Grid sx={ImageSlider_Grid1}>
              <Link to={"/SignupPage"} style={ImageSlider_Link1}>
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
        sx={ImageSlider_Box3}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

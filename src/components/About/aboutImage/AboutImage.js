// import { Grid } from "@mui/material";
// import construction from "../../../Asset/image/aboute.jpeg";
// import mechanic from "../../../Asset/image/meca.jpg";
// import { useEffect, useState } from "react";
// function AboutImg(props) {
//   const [image_index, setImageIndex] = useState(0);

//   const image_list = [construction, mechanic];
//   useEffect(() => {
//     const _ = setInterval(() => {
//       setImageIndex((image_index) => image_index + 1);
//     }, 5000);
//   }, [image_index]);

//   return (
//     <>
//       <img
//         src={image_list[(image_index % image_list.length).toFixed()]}
//         alt="image"
//         className="image"
//         style={{ width: "80%", height: "90%" }}
//       />
//     </>
//   );
// }
// export default AboutImg;
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import construction from "../../../Asset/image/aboute.jpeg";
import mechanic from "../../../Asset/image/meca.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: construction,
  },
  {
    imgPath: mechanic,
  },
];

function AboutImage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "ltr" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { xs: 400, md: 500 },
                  display: "block",
                  maxWidth: 500,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default AboutImage;

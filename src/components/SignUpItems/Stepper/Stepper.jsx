import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "تایید شماره همراه",
  "وارد کردن اطلاعات",
  "بارگذاری عکس",
  "تایید نهایی",
];

export default function Stepper1({ stepID }) {
  return (
    <Box mt={10} mx="auto" width="80%" sx={{ direction: "ltr" }}>
      <Stepper activeStep={stepID} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

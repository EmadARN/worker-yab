import React from "react";

import Button from "@mui/material/Button";
import { CustomButton, CustomButtonA, Span2, Span3, Span4 } from "./style";
const BtnAnimation = ({ title, color, size, ffamily, fweight }) => {
  return (
    <CustomButton>
      <CustomButtonA href="" data-target="#log-in">
        <Span2></Span2>
        <Span3></Span3>
        <Span4></Span4>
        <Button
          variant="text"
          sx={{
            color: color,
            fontFamily: ffamily,
            fontSize: size,
            fontWeight: fweight,
          }}
        >
          {title}
        </Button>
      </CustomButtonA>
    </CustomButton>
  );
};

export default BtnAnimation;

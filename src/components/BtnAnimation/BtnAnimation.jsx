import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const BtnAnimation = ({ title, color, size, ffamily, fweight }) => {
  const CustomButton = styled("div")(({ theme }) => ({
    alignItems: "center",
    border: 0,
    overflow: "hidden",
  }));
  const CustomButtonA = styled("div")(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    margin: " 0 auto",
    whiteSpace: " nowrap",
    padding: "12px",
  }));

  const Span2 = styled("div")(({ theme }) => ({
    width: "2px",
    height: "100%",
    background: "linear-gradient(to bottom, #030f27, rgba(253,190,51,1))",
    position: "absolute",
    top: "0",
    right: "0",
    animation: "span2 3s linear infinite",
    "@keyframes span2": {
      "0%": {
        transform: "translateY(100%)",
      },
      "100%": {
        transform: " translateY(-100%)",
      },
    },
  }));
  const Span3 = styled("div")(({ theme }) => ({
    width: "100%",
    height: "2px",
    background: "linear-gradient(to left, #030f27, rgba(253,190,51,1))",
    position: "absolute",
    bottom: "0",
    right: "0",
    animation: "span3 3s 1.5s linear infinite",
    "@keyframes span3": {
      "0%": {
        transform: "translateX(-100%)",
      },
      "100%": {
        transform: " translateX(100%)",
      },
    },
  }));
  const Span4 = styled("div")(({ theme }) => ({
    width: "2px",
    height: "100%",
    background: "linear-gradient(to top, #030f27, rgba(253,190,51,1))",
    position: "absolute",
    bottom: "0",
    left: "0",
    animation: "span4 3s linear infinite",
    "@keyframes span4": {
      "0%": {
        transform: "translateY(-100%)",
      },
      "100%": {
        transform: " translateY(100%)",
      },
    },
  }));
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

import styled from "@emotion/styled";
import React from "react";
const Customa = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  margin: " 0 auto",
  width: "15%",
  padding: "15px",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    background: " #fdbe33",
    color: "#fff",
    fontSize: "22px",
    borderRadius: "5px",
    transition: "all .5s",
    boxShadow:
      "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%)",
  },
}));
const Btn1 = styled("div")(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "linear-gradient(to left,#030f27, rgba(253,190,51,1)) ",
  position: "absolute",
  top: 0,
  left: "-100%",
  animation: "span1 1s linear infinite",
  "@keyframes span1": {
    "0%": {
      left: " -100%",
    },
    "50%,100%": {
      left: " 100%",
    },
  },
}));
const Btn2 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "100%",
  background: "linear-gradient(to top,  #030f27, rgba(253,190,51,1))",
  position: "absolute",
  top: "-100%",
  right: 0,
  animation: "span2 1s .25s linear infinite",
  "@keyframes span2": {
    "0%": {
      top: " -100%",
    },
    "50%,100%": {
      top: " 100%",
    },
  },
}));
const Btn3 = styled("div")(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "linear-gradient(to right,  #030f27, rgba(253,190,51,1))",
  position: "absolute",
  bottom: 0,
  right: "-100%",
  animation: "span3 1s .5s linear infinite",
  "@keyframes span3": {
    "0%": {
      right: " -100%",
    },
    "50%,100%": {
      right: " 100%",
    },
  },
}));
const Btn4 = styled("div")(({ theme }) => ({
  width: "2px",
  height: "100%",
  background: "linear-gradient(to bottom, #030f27, rgba(253,190,51,1))",
  position: "absolute",
  bottom: "-100%",
  left: 0,
  animation: "span4 1s .75s linear infinite",
  "@keyframes span4": {
    "0%": {
      bottom: " -100%",
    },
    "50%,100%": {
      bottom: " 100%",
    },
  },
}));
const BtnSignUp = () => {
  return (
    <>
      <Customa href="#">
        <Btn1></Btn1>
        <Btn2></Btn2>
        <Btn3></Btn3>
        <Btn4></Btn4>
        ثپت
      </Customa>
    </>
  );
};

export default BtnSignUp;

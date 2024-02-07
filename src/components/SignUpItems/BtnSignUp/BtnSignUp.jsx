import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BtnSignUpStyle, LinkStyle } from "../style";

const BtnSignUp = ({ navigate, onClick, linkState, submit }) => {
  return (
    <>
      <Link to={navigate} state={linkState} style={LinkStyle}>
        <Button
          type={submit}
          variant="contained"
          onClick={onClick}
          sx={BtnSignUpStyle}
        >
          ثبت
        </Button>
      </Link>
    </>
  );
};

export default BtnSignUp;

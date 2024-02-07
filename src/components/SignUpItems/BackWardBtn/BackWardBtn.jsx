import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyle, LinkStyle } from "../style";

const BackWardBtn = ({ navigate }) => {
  return (
    <Link to={navigate} style={LinkStyle}>
      <Button variant="contained" sx={ButtonStyle}>
        ویرایش شماره همراه
      </Button>
    </Link>
  );
};

export default BackWardBtn;

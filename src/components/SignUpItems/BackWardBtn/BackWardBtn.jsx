import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BackWardBtn = ({ navigate }) => {
  return (
    <Link
      to={navigate}
      style={{
        textDecoration: "none",

        fontSize: "20px",
      }}
    >
      {" "}
      <Button
        variant="contained"
        sx={{
          maxWidth: "160px",
          width: "100%",
          transition: ".5s",
          borderRadius: "2px",
          p: "15px 35px",
          color: " #fdbe33",
          fontSize: "16px",
          bgcolor: "#030f27",
          fontWeight: "700",
          fontFamily: "Lalezar",
          whiteSpace: "nowrap",
          "&:hover": {
            transition: "all .75s",
            bgcolor: "#fdbe33",
            color: "#030f27",
            boxShadow:
              "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        ویرایش شماره همراه
      </Button>
    </Link>
  );
};

export default BackWardBtn;

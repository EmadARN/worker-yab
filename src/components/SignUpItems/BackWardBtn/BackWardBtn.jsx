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
          width: { xs: "50%" },
          transition: ".5s",
          borderRadius: "2px",
          p: "15px 35px",
          color: " #fdbe33",
          fontSize: "16px",
          bgcolor: "#030f27",
          fontWeight: "700",
          fontFamily: "Lalezar",
          "&:hover": {
            transition: "all .75s",
            p: "20px 40px",
            bgcolor: "#fdbe33",
            color: "#030f27",
            boxShadow:
              "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        قبل
      </Button>
    </Link>
  );
};

export default BackWardBtn;

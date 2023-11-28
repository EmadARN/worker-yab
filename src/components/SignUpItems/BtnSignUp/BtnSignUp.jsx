import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BtnSignUp = ({ navigate, onClick, linkState, submit }) => {
  return (
    <>
      <Link
        to={navigate}
        state={linkState}
        style={{
          textDecoration: "none",

          fontSize: "20px",
        }}
      >
        <Button
          type={submit}
          variant="contained"
          onClick={onClick}
          sx={{
            width: { xs: "50%" },
            transition: ".8s",
            borderRadius: "2px",
            p: "15px 35px",
            color: "#030f27",
            fontSize: "16px",
            bgcolor: "#fdbe33",
            fontWeight: "700",
            whiteSpace: { xs: "wrap", sm: "nowrap" },
            fontFamily: "Lalezar",
            ml: { xs: 0, md: 8 },
            "&:hover": {
              transition: "all .75s",

              bgcolor: "#030f27",
              color: "#fdbe33",
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          ثبت{" "}
        </Button>
      </Link>
    </>
  );
};

export default BtnSignUp;

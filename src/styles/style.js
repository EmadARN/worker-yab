//AboutPage
//AllWorkerPage

import styled from "@emotion/styled";

//Home
export const HomeBtnStyle = {
  px: 6,
  height: "60px",
  fontWeight: "bold",
  fontSize: "20px",
  transition: ".5s",
  borderRadius: "2px",
  p: "15px 35px",
  color: "#030f27",

  bgcolor: "#fdbe33",

  fontFamily: "Lalezar",
  animation: "span1 3s 2s  ease-in-out infinite  alternate",
  "&:hover": {
    bgcolor: "transparent",
  },
  "@keyframes span1": {
    "0%": {
      transform: "scaleX(80%)",
    },
    "100%": {
      transform: " scaleX(100%)",
      bgcolor: "#030f27",
      color: "#fdbe33",
    },
  },
};
//ServicePage
//SignUpPage
//SignUpPage2
export const Grid1 = {
  width: "40%",
  margin: "auto",
  pr: { xs: 0, sm: 5, md: 12, lg: 15, xl: 20 },
};
//SignUpPage3
export const Grid2 = {
  display: "flex",
  justifyContent: "center",
};

export const Grid3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
//SignUpPage4
export const MainGrid = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "0 12px",
};

export const Typography1 = { whiteSpace: { xs: "wrap" } };
export const Box1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "4%",
  width: { xs: "90%", md: "100%" },
};
export const Typography2 = {
  mb: { xs: "6%", md: "none" },
};
export const Box2 = {
  display: "flex",
  justifyContent: { xs: "center" },
};
export const Button1 = {
  bgcolor: "#fdbe33",
  color: "#030f27",
  p: 1.8,
  fontWeight: "bold",
  fontSize: "15px",
  "&:hover": {
    bgcolor: "#fdbe33",
    "& .iconee": {
      color: "#030f27",
    },
  },
};
export const CloudUploadIconSx = {
  mx: 2,
  color: "#030f27",
};

export const Button2 = {
  transition: ".5s",
  p: "14px 35px",
  color: "#fdbe33",
  fontSize: "16px",
  bgcolor: "#030f27",
  fontWeight: "700",
  fontFamily: "Lalezar",
  borderRadius: "20px 0px 0px 20px",
  "&:hover": {
    transition: "all .75s",

    bgcolor: "#030f27",
    color: "#fdbe33",
  },
};

export const Typogrophy3 = {
  fontSize: "20px",
  color: "red",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  mt: 3,
};
export const Box4 = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
export const Button3 = {
  mt: { xs: 5, md: 0 },
  transition: ".5s",
  borderRadius: "2px",
  p: "10px 35px",
  color: "#030f27",
  fontSize: "16px",
  bgcolor: "#fdbe33",
  fontWeight: "700",
  fontFamily: "Lalezar",
  "&:hover": {
    transition: "all .75s",
    p: "10px 40px",
    bgcolor: "#030f27",
    color: "#fdbe33",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
  },
};
//SignUpPage5

export const buttonSx = (success) => {
  const style2 = {
    fontSize: "20px",
    fontWeight: "bolder",
    bgcolor: "#030f27",
    "&:hover": {
      transition: "all .75s",

      bgcolor: "#030f27",
      color: "#fdbe33",
      boxShadow:
        "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
    },
    ...(success && {
      bgcolor: "#030f27",
      color: "#fff",

      fontWeight: "bolder",
      "&:hover": { bgcolor: "#030f27" },
    }),
  };
  return style2;
};

export const Grid4 = {
  justifyContent: "center",
  mb: { xs: 0, md: 5 },
};
export const typography4 = {
  color: "gray",
  textAlign: "center",
  fontWeight: "bold",
  margin: "7% 0",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
};

export const Typography5 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Button5 = {
  mt: { xs: 5, md: 0 },
  transition: ".5s",
  borderRadius: "2px",
  p: "10px 35px",
  color: "#030f27",
  fontSize: "16px",
  bgcolor: "#fdbe33",
  fontWeight: "700",
  fontFamily: "Lalezar",
  "&:hover": {
    transition: "all .75s",
    p: "10px 40px",
    bgcolor: "#030f27",
    color: "#fdbe33",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
  },
};
export const Box5 = {
  m: 1,
  position: "relative",
};

export const Typography6 = (success) => {
  const style3 = {
    p: "4px 35px",
    fontSize: { xs: "15px", md: "20px" },
    fontWeight: { xs: "bold", md: "bolder" },

    ...(success && {
      opacity: 0,
    }),
  };
  return style3;
};

export const CircularProgressSx= {
  color: "#030f27",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginTop: "-12px",
  marginLeft: "-12px",
}
export const CheckIconSx= {
  color: "#fdbe33",
  position: "absolute",
  top: "50%",
  left: "50%",

  marginTop: "-22px",
  marginLeft: "-12px",
  fontWeight: "bolder",
  fontSize: "45px",
}

export const AlertSx= {
  fontSize: "25px",
  whiteSpace: "nowrap",
  "& .MuiPaper-root": { display: "none" },
}
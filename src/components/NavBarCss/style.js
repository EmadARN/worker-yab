export const BoxStyle1 = {
  display: { xs: "none", md: "flex" },
  justifyContent: "center",
  width: "100%",
  marginTop: "20px",
};

export const BoxStyle2 = {
  bgcolor: "#030f27",
  width: "100vw",
  p: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: "0px",
  zIndex: "999",
  transition: "all 1s ",
};

export const BoxStyleTow = { flexGrow: 1, display: { xs: "none", md: "flex" } };

export const BoxStyle4 = { pl: 3, display: "flex" };
export const BoxStyle5 = {
  bgcolor: "#030f27",
  width: "90%",
  p: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 1s",
};
export const BoxStyle6 = { pl: 3, display: "flex", alignItems: "center" };
export const LinkStyle = {
  color: "#fff",
  fontSize: "20px",
};
export const ButtonStyle1 = {
  my: 2,
  mx: 2,
  color: "#fff",
  display: "block",
  fontSize: "20px",
  px: 4,
  cursor: "pointer",
  position: "relative",
  transition: "all 1s",
  "&:after": {
    content: '" "',
    width: "5px",
    height: "5px",
    position: "absolute",
    border: "0px solid #fff",
    transition: "all 1s",
    top: "-1px",
    left: "-1px",
    borderTop: "2px solid #fdbe33",
    borderLeft: "2px solid #fdbe33",
  },
  "&:before": {
    content: '" "',
    width: "5px",
    height: "5px",
    position: "absolute",
    border: "0px solid #fff",
    transition: "all 1s",
    bottom: "-1px",
    right: "-1px",
    borderBottom: "2px solid #fdbe33",
    borderRight: "2px solid #fdbe33",
  },
  "&:hover": {
    "&:after": {
      width: "70%",
      height: " 70%",
    },
    "&:before": {
      width: "70%",
      height: " 70%",
    },
  },
};
export const ButtonStyle2 = {
  my: 2,
  mx: 2,
  color: "#fff",
  display: "block",
  fontSize: "20px",
  px: 4,
  cursor: "pointer",
  position: "relative",
  transition: "all 1s",
  "&:after": {
    content: '" "',
    width: "5px",
    height: "5px",
    position: "absolute",
    border: "0px solid #fff",
    transition: "all 1s",
    top: "-1px",
    left: "-1px",
    borderTop: "2px solid #fdbe33",
    borderLeft: "2px solid #fdbe33",
  },
  "&:before": {
    content: '" "',
    width: "5px",
    height: "5px",
    position: "absolute",
    border: "0px solid #fff",
    transition: "all 1s",
    bottom: "-1px",
    right: "-1px",
    borderBottom: "2px solid #fdbe33",
    borderRight: "2px solid #fdbe33",
  },
  "&:hover": {
    "&:after": {
      width: "70%",
      height: " 70%",
    },
    "&:before": {
      width: "70%",
      height: " 70%",
    },
  },
};

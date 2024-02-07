export const BoxStyle = (width) => {
  const style = {
    textAlign: "center",
    width: width,
    position: "relative",
    margin: "auto",
  };
  return style;
};
export const TypographyStyle = {
  fontFamily: "Lalezar",
  position: "absolute",
  fontSize: "28px",
  whiteSpace: { xs: "wrap", md: "nowrap" },
  "&::before": {
    content: '""',
    position: "absolute",
    right: "-55px",
    top: " 20px",
    maxWidth: "50px",
    width: "100%",
    height: "4px",
    backgroundColor: "#fdbe33",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "-56px",
    top: " 20px",
    maxWidth: "50px",
    width: "100%",
    height: "4px",
    backgroundColor: "#fdbe33",
  },
};

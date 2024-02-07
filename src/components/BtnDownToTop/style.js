export const BtnDownToTop_Box1 = (visible) => {
  const style = {
    "& > :not(style)": { m: 1 },
    position: "fixed",
    top: "70%",
    bottom: { xs: "50%", md: "65%" },
    display: `${visible ? "inline" : "none"}`,
    zIndex: "999",
  };
  return style;
};
export const BtnDownToTop_Box2 = {
  p: 1.5,

  backgroundColor: " #fdbe33",
  border: "1px solid #030f27",
  borderRadius: "4px",
  color: "#030f27",
  display: { xs: "none", md: "inline-flex" },

  cursor: "pointer",
  "&:hover": {
    backgroundColor: " #030f27",
    color: "#fdbe33",
  },
};

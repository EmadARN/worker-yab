export const BoxStyle1 = { mr: { xs: 2, sm: 10 } };
export const BoxStyle2 = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "0.5s ease-in",

  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
};

export const CardMediaStyle = { height: { xs: 200, sm: 250, md: 350 } };
export const TypographyStyle = {
  position: "absolute",
  color: "#fff",
  right: "50%",
  top: "50%",
  transform: "translate(50%,-50%)",
};
export const GridStyle1 = { my: { xs: 2, md: 0 } };
export const ButtonStyle = {
  width: "100%",
  bgcolor: "#030f27",
  color: "#fdbe33",
  fontFamily: "Lalezar",
  fontSize: "22px",
  "&:hover": {
    bgcolor: "#fdbe33",
    color: "#030f27",
  },
};

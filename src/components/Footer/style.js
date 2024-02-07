import { styled } from "@mui/material";

export const FotterGrid = styled("Grid")(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#030F27",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "space-around",

    marginTop: ".2%",
  },
}));

export const coloumnGrid = {
  display: "flex",
  textAlign: "start",
  marginTop: "5%",
  marginBottom: "5%",
};

export const ItemGrid = {
  display: "flex",
  alignItems: "center",
};

export const ItemText = {
  whiteSpace: "nowrap",
};

export const Grid1 = (props) => {
  const style = {
    display: { xs: props.display, md: "flex" },
    justifyContent: "space-evenly",
    borderBottom: "3px solid white",
    pr: { xs: 5, md: 0 },
  };
  return style;
};

export const Typ2 = {
  color: "#CC902F",
  whiteSpace: "nowrap",
};

export const KeyboardArrowRightIconSX = {
  color: "white",
  fontSize: "22px",
  mt: 1,
  "&:hover": {
    transition: "all .75s ",
    color: "#fdbe33",
  },
};

export const Button1 = {
  color: "white",
  fontSize: { xs: "17px", sm: "20px" },
  "&:hover": {
    mr: { xs: 1, sm: 2, md: 1 },
    transition: "all .75s ",
    color: "#fdbe33",
  },
};

export const Grid2 = {
  marginLeft: { xs: "5%", md: "15%" },
};

export const KeyboardArrowRightIconSx = {
  color: "white",
  fontSize: "25px",
  mt: 1,
  "&:hover": {
    transition: "all .75s ",
    color: "#fdbe33",
  },
};

export const Typography3 = {
  color: "white",
  fontSize: { xs: "17px", sm: "20px" },
};

export const LocationOnIconSx = {
  color: "white",
  fontSize: "22px",
};

export const EmailIconSX = {
  color: "white",
  fontSize: "22px",
  mt: 0.5,
};

export const Grid4 = {
    display: "flex",
    alignItems: "center",
    padding: "1% 0",
    justifyContent: "center",
  }
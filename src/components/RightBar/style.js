import { styled } from "@mui/material/styles";
export const Container = styled("div")(({ theme }) => ({
  backgroundColor: "#fdbe33",
  [theme.breakpoints.down("md")]: {
    display: "inline-block",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  paddingTop: 5,
  width: "100%",

  height: "100%",
  color: "#efef",
}));
export const BoxStyle1 = (visible) => {
  const style = {
    position: "fixed",
    top: "11%",

    display: `${visible ? "none" : "inline"}`,

    zIndex: "999",
  };
  return style;
};

export const BoxStyleTwo = {
  display: { xs: "block", sm: "flex" },
  pr: 2,
};
export const BoxStyle3 = (display) => {
  const style = {
    display: { xs: ` ${display}`, sm: "flex" },
    pr: 1,
  };
  return style;
};
export const LinkStyle = {
  color: "#222",
  fontSize: "20px",
};
export const HomeStyle = {
  color: "#030f27",
  "@media (max-width:470px)": {
    marginBottom: "40px",
  },
  cursor: "pointer",
  mt: { xs: 0, sm: 3 },
};
export const TypographyStyle = {
  pb: 3,
  color: "#030f27",
  pr: { xs: 0, sm: 1 },
  mt: { xs: 0, sm: 3 },
  "@media (max-width:470px)": {
    display: "none",
  },
};

export const GroupsIconStyle = {
  color: "#030f27",
  "@media (max-width:470px)": {
    marginBottom: "40px",
  },
  cursor: "pointer",
};
export const TypographyStyletwo = {
  pb: 5,
  color: "#030f27",
  pr: { xs: 0, sm: 1 },
  "@media (max-width:470px)": {
    display: "none",
  },
};
export const ManageAccountsIconStyle = {
  color: "#030f27",
  "@media (max-width:470px)": {
    marginBottom: "40px",
  },
  cursor: "pointer",
};
export const TypographyStyle3 = {
  pb: 5,
  color: "#030f27",
  pr: { xs: 0, sm: 1 },
  "@media (max-width:470px)": {
    display: "none",
  },
};

export const FabPropsStyle = {
  sx: {
    color: "#fdbe33",
    bgcolor: "#030f27",
    "&:hover": {
      bgcolor: "#fdbe33",
      color: "#030f27",
    },
    width: { xs: "45px", sm: "56px" },
    height: { xs: "45px", sm: "55px" },
  },
};

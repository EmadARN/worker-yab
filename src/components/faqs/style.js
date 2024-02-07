import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Accordion = styled((props) => (
  <MuiAccordion
    style={{ backgroundColor: "#fcfcfc" }}
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginTop: "10px",
  "&:before": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "20px",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={{
          fontSize: "25px",
          color: "#fff",
          margin: "10px",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(199,195,139,0.95)" : "#fdbe33",
  "&:hover": {
    backgroundColor: "#030f27",
    color: "#fdbe33",
  },
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #fff",
}));


export const Typhographi = {
    fontSize: { xs: "16px", md: "22px" },
    fontWeight: { xs: "", md: "500" },
  } 
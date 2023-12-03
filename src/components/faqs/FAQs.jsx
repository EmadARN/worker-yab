import * as React from "react";
import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Title from "../Title/Title";

const Accordion = styled((props) => (
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

const AccordionSummary = styled((props) => (
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid #fff",
}));

function FAQs() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box sx={{ mr: { xs: 2, sm: 10 } }}>
        <Title title="سوالات شما" width={"200px"} />
      </Box>
      <Grid container sx={{ mt: 15 }}>
        <Grid item xs={12} md={6} sx={{}}>
          <Accordion onChange={handleChange("panel1")}>
            <AccordionSummary>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "22px" },
                  fontWeight: { xs: "", md: "500" },
                }}
              >
                چه چیزی درباره ما میخواهید؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion onChange={handleChange("panel2")}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "22px" },
                  fontWeight: { xs: "", md: "500" },
                }}
              >
                چه چیزی درباره ما میخواهید؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Accordion onChange={handleChange("panel6")}>
            <AccordionSummary>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "22px" },
                  fontWeight: { xs: "", md: "500" },
                }}
              >
                چه چیزی درباره ما میخواهید؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion onChange={handleChange("panel7")}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "22px" },
                  fontWeight: { xs: "", md: "500" },
                }}
              >
                چه چیزی درباره ما میخواهید؟
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h6">
                شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}

export default FAQs;

import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Title from "../Title/Title";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typhographi,
} from "./style";

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
              <Typography sx={Typhographi}>
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
              <Typography sx={Typhographi}>
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
              <Typography sx={Typhographi}>
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
              <Typography sx={Typhographi}>
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

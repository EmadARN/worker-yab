import { Container } from "@mui/system";
import React from "react";

import TableRow from "./Table";
import { Grid } from "@mui/material";

const TableMain = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            xs={12}
            sx={{
              display: "felx",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <TableRow />
          </Grid>

          <Grid
            container
            sx={{
              "@media(min-width:600px)": {
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              },
              "@media (max-width:600px)": {
                margin: "auto",
                textAlign: "center",
              },
            }}
          ></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TableMain;

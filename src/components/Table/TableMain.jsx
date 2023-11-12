import { Container } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import Title from "../Title/Title";
import TableInfo from "./Table";

const TableMain = ({ row, title, width, xsWidth }) => {
  return (
    <>
      <Title title={title} width={width} xsWidth={xsWidth} />
      <Container>
        <Grid container>
          <Grid
            xs={12}
            sx={{
              display: "felx",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
              overflowX: { xs: "scroll", md: "unset" },
              mt: 20,
              cursor: "pointer",
              "&::-webkit-scrollbar": {
                height: "10px",
              },
              "&::-webkit-scrollbar-track": {
                "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.3)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "  #fdbe33",
                outline: " 3px solid #030f27",
              },
            }}
          >
            <TableInfo row={row} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TableMain;

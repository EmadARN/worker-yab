import { Container } from "@mui/system";
import React from "react";
import { Grid, TextField } from "@mui/material";
import Title from "../Title/Title";
import TableInfo from "./Table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SearchIcon from "@mui/icons-material/Search";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const TableMain = ({ row, title, width, xsWidth, display }) => {
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
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={themee}>
                <TextField
                  sx={{
                    display: display,
                    mb: 5,
                    input: {
                      color: "#272523",
                      direction: "rtl",
                      pr: 2,
                      direction: "ltr",
                    },
                    label: { color: "#272523", fontWeight: "bold" },
                    "& label.Mui-focused": {
                      color: "#272523",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFC436",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#272523",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FFC436",
                      },
                    },
                  }}
                  id="standard-basic"
                  label={<SearchIcon />}
                  variant="standard"
                />
              </ThemeProvider>
            </CacheProvider>

            <TableInfo row={row} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TableMain;

import { Container } from "@mui/system";
import React, {useEffect, useState} from "react";
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


    const [data, setData] = useState(row)
    const [tempData, setTempdata] = useState(row)

    useEffect(()=>{

        setTempdata(row)
        setData(row)

    }, [row])


    const searchFun=(e)=> {


            if(e.target.value !== ''){

                const dd = data.filter((item)=> {

                    if (item.job === e.target.value) {

                        return item

                    }
                })

                setTempdata(dd)

            }else{

                setTempdata(data)
            }
    }
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
                  onChange={searchFun}
                />
              </ThemeProvider>
            </CacheProvider>

            <TableInfo row={tempData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TableMain;

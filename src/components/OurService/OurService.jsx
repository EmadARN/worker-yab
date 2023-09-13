import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import builder from "../../Asset/image/about.jpg";
import mechanic from "../../Asset/image/Industrial-Maintenance-Mechanic-Technician-940x529.jpg";
import { styled } from "@mui/material/styles";
import Title from "../Title/Title";

const OurService = () => {
  const buttons = [
    { id: 1, name: "ساختمانی", img: builder },
    { id: 2, name: "مکانیک", img: mechanic },
  ];
  const Contain = styled("Box")(({ theme }) => ({}));

  return (
    <>
      <Title title="سرویس ها" />

      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", mt: 15 }}
      >
        {buttons.map((item) => {
          return (
            <Grid xs={12} md={6} sx={{ width: "900px" }}>
              <Card
                sx={{
                  mx: { lg: 2 },
                  my: 3,
                  maxWidth: { xs: "375px", lg: "900px" },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
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
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ position: "absolute", color: "#fff" }}
                    >
                      دوره متخصصی طراحی وب
                    </Typography>
                  </Box>
                  <CardMedia
                    sx={{
                      height: { xs: "180px", md: "300px" },
                      width: "100%",
                    }}
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                </Box>

                <Box sx={{ p: 0, m: 0 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      width: "100%",
                      bgcolor: "#030f27",
                      color: "#fdbe33",
                      fontFamily: "Lalezar",
                      fontSize: "22px",
                    }}
                  >
                    {item.name}
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default OurService;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import builder from "../../Asset/image/portfolio-5.jpg";
import mechanic from "../../Asset/image/Industrial-Maintenance-Mechanic-Technician-940x529.jpg";
import { styled } from "@mui/material/styles";
import Title from "../Title/Title";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const OurService = () => {
  const buttons = [
    {
      id: 1,
      name: "ساختمانی",
      img: builder,
      desc: "نیروی کارگر ساختمان",
      to: "/worker",
    },
    {
      id: 2,
      name: "مکانیک",
      img: mechanic,
      desc: "نیروی مکانیک",
      to: "/mechanic",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ mr: { xs: 2, sm: 10 } }}>
        <Title title="سرویس ها" width={"200px"} />
      </Box>

      <Grid container sx={{ mt: 15 }}>
        {buttons.map((item) => {
          return (
            <Grid
              key={item.id}
              xs={12}
              md={6}
              sx={{ px: 2, my: { xs: 2, md: 0 } }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  onClick={() => navigate(item.to)}
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
                    onClick={() => navigate(item.page)}
                    variant="h6"
                    sx={{
                      position: "absolute",
                      color: "#fff",
                      right: "50%",
                      top: "50%",
                      transform: "translate(50%,-50%)",
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
                <CardMedia
                  sx={{ height: { xs: 200, sm: 250, md: 350 } }}
                  component="img"
                  image={item.img}
                  alt="green iguana"
                />
              </Box>

              <Box sx={{ p: 0, m: 0 }}>
                <Link to={item.to}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      width: "100%",
                      bgcolor: "#030f27",
                      color: "#fdbe33",
                      fontFamily: "Lalezar",
                      fontSize: "22px",
                      "&:hover": {
                        bgcolor: "#fdbe33",
                        color: "#030f27",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default OurService;

import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import Title from "../Title/Title";
import { Link, useNavigate } from "react-router-dom";
import { buttons } from "./data";
import {
  BoxStyle1,
  BoxStyle2,
  ButtonStyle,
  CardMediaStyle,
  GridStyle1,
  TypographyStyle,
} from "./style";

const OurService = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={BoxStyle1}>
        <Title title="سرویس ها" width={"200px"} />
      </Box>

      <Grid container mt={15}>
        {buttons.map((item) => {
          return (
            <Grid key={item.id} xs={12} md={6} px={2} sx={GridStyle1}>
              <Box position="relative">
                <Box onClick={() => navigate(item.to)} sx={BoxStyle2}>
                  <Typography
                    onClick={() => navigate(item.page)}
                    variant="h6"
                    sx={TypographyStyle}
                  >
                    {item.desc}
                  </Typography>
                </Box>
                <CardMedia
                  sx={CardMediaStyle}
                  component="img"
                  image={item.img}
                  alt="green iguana"
                />
              </Box>

              <Grid p={0} m={0}>
                <Link to={item.to}>
                  <Button variant="contained" size="small" sx={ButtonStyle}>
                    {item.name}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default OurService;

import { Grid } from "@mui/material";

function AboutImg(props) {
  return (
    <>
      <Grid container xs={12} sx={{ m: " 0 " }}>
        <img src={props.imgs1} width="90%" height="100%" />
        {/*<img src={props.imgs2} width="90%" height="800px"/>*/}
      </Grid>
    </>
  );
}
export default AboutImg;

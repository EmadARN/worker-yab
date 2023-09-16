import React from 'react'
import TopBarCss from '../components/topbarcss/TopBarCss'
import { Button, Grid, Typography } from '@mui/material'
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import NavBar from "../components/NavBarCss/NavBar";
import { Link } from 'react-router-dom';
import Contactus from '../components/Contact Us/Contact-us'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {Footer} from '../components/Footer/Footer'

const ContactUs = (display) => {
  return (
<>
<Grid
        container
        xs={12}
        sx={{
          backgroundColor: "#fdbe33",
   
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            textAlign: { xs: "center", sm: "center", md: "0" },
            mt: 3,
          }}
        >
          <Typography
            variant="h1"
            fontFamily="Lalezar"
            fontWeight="1.5"
            sx={{ fontSize: { xs: "50px", md: "80px" } }}
          >
            سازندگان
          </Typography>
        </Grid>

        <Grid
          container
          xs={4}
          sm={4}
          md={5}
          lg={6}
          xl={6}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            fontSize: { md: "25px", lg: "20px" },
            mt: 3,
          }}
        >
          <Grid item xs={4}>
            <CalendarMonthOutlinedIcon fontSize="large" />

            <Typography fontFamily="Lalezar">آدرس</Typography>

            <Typography fontFamily="Lalezar">زنجان , اعتمادیه</Typography>
          </Grid>

          <Grid item xs={4}>
            <ContactPhoneOutlinedIcon fontSize="large" />
            <Typography fontFamily="Lalezar">تماس با ما</Typography>

            <Typography fontFamily="Lalezar">0243332265</Typography>
          </Grid>

          <Grid item xs={4}>
            <ForwardToInboxOutlinedIcon fontSize="large" />
            <Typography fontFamily="Lalezar">ایمیل ما</Typography>

            <Typography fontFamily="Lalezar">info@gmail.com</Typography>
          </Grid>
        </Grid>
        <NavBar display={display} />

        <Grid sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"5% auto",flexDirection:"column"}}>
        <Typography fontFamily="Lalezar" variant='h2' >ارتباط با ما</Typography>
        <Grid sx={{display:"flex",alignItems:"center"}}>
            <Link to={"/"}><Button sx={{color:"black",fontSize:"25px",fontFamily:"Lalezar",'&:hover':{color:"#fff"}}}>خانه</Button></Link>
            <Typography sx={{fontSize:"30px"}}>/</Typography>
            <Link to={ "/About"}><Button sx={{color:"black",fontSize:"25px",fontFamily:"Lalezar",'&:hover':{color:"#fff"}}}>درباره ما</Button></Link>
        </Grid>
        </Grid>
      </Grid>

      <Grid sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"15%",mb:{xs:"20%",md:'0'}}}>
<Typography fontFamily="Yekan" fontSize="24px" fontWeight="bold" whiteSpace="nowrap">نظرات خود را با ما به اشتراک بگزارید
</Typography>
      </Grid>

<Grid>
 <Contactus
  data={
    [
      {id:1,icon:<LocationOnIcon sx={{fontSize:"35px"}}/>,title:'آدرس',info:"زنجان اعتمادیه خیابان 12"},
      {id:2,icon:<LocalPhoneIcon sx={{fontSize:"35px"}}/>,title:'شماره تماس',info:"12345678"},
     {id:3,icon:<EmailIcon sx={{fontSize:"35px"}}/>,title:'ایمیل',info:"test@gmail.com"}
   ]
  }   />
</Grid>


<Footer
page1 = {"درباره ما"}
page2={"ارتباط با ما"}
page3={"خدمات"}
services1={"خدمات مکانیکی"}
services2={"کارگران ساختمانی"}
address={'اعتمادیه.خیابان اول عربی'}
phNumber={"0919123456"}
email={"test1@gmail.com"}
/>

 
</>
  )
}

export default ContactUs
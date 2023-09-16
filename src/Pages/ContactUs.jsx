import React from 'react'
import TopBarCss from '../components/topbarcss/TopBarCss'
import { Button, Grid, Typography } from '@mui/material'

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
<TopBarCss/>

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
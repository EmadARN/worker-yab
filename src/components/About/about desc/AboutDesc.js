import {Button, Grid, Typography} from "@mui/material";

function AboutDesc(){
    return(
        <>
            <Grid  >

                <Grid sx={{margin:"10px auto"}}>
                    <Typography sx={{fontSize:"18px"  ,color:"#6a6a6a"}}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی.
                    </Typography>

                    <Typography sx={{mt: 2 , fontSize:"18px" , color:"#6a6a6a"}}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود  دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Typography>

                    <Button variant="contained" color="warning" sx={{left:{xs:"10%" , sm:"12%" ,md:"55%"},position:"absolute",mt: 4,transition:".5s",borderRadius:"0" , p: "15px 35px" , color:"#000" , fontSize:"16px" , }}>ادامه دیگر</Button>
                </Grid>

            </Grid>
        </>
    )
}
export default AboutDesc
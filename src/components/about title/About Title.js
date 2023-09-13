import {Grid, Typography} from "@mui/material";
import AboutDesc from "../about desc/AboutDesc";

function AboutTitle(){
    return(
        <>
            <Grid container xs={12}>

                <Grid item xs={8} sx={{margin:"50px auto"}}>
                    <Typography color="#fdbe33" fontSize="30px" fontWeight="bold">
                        خوش آمدید به سازندگان
                    </Typography>

                    <Typography variant="h3" fontFamily="Lalezar">
                        5 سال سابقه کار تخصصی در قسمت فنی
                    </Typography>

                </Grid>



            </Grid>
        </>
    )
}
export default AboutTitle
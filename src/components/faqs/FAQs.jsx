import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props) => (
    <MuiAccordion style={{backgroundColor:"#fcfcfc"}} elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    marginTop:"10px",
    '&:before': {
        display: 'none',
    },

}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon  sx={{ fontSize: '25px' , color:"#fff"  ,margin: "10px"}} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(199,195,139,0.95)'
            : 'rgb(253,224,157)',

    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    border: '1px solid #fff',

}));

function FAQs() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Grid container xs={12} sx={{m : 10}} spacing={5}>
            <Grid item xs={12}>
                <Typography variant="h5" color="#FDBE33FF" fontWeight="bold"  sx={{textAlign:"center"}}>
                    سوالات متداول
                </Typography>
                <Typography variant="h5" color="#000"  sx={{margin:" 5px auto" , textAlign:"center"}}>
                    شما همگی میتوانید سوال کنید
                </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >


            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    >
                    <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6">
                        شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6">
                        شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="h6">
                        شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                    </Typography>
                </AccordionDetails>
            </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary

                    >
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <Typography variant="h5">چه چیزی درباره ما میخواهید؟</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">
                            شزکت ما شرکتی موثر در تمامی عرصه های فنی این کشور می باشد.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>

    );
}

export default FAQs
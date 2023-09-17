import { Grid } from "@mui/material";
import construction  from "../../../Asset/image/aboute.jpeg";
import mechanic from '../../../Asset/image/meca.jpg';
import {useState} from "react";
function AboutImg(props) {
    const [image_index, setImageIndex] = useState(0)

const image_list =[

        construction,

    mechanic,
        ]
    const _ = setInterval(() => {

        setImageIndex(image_index+1)

    }, 1000)
    console.log(image_list.length)
    return(

        <>

            <img src={image_list[(image_index % image_list.length).toFixed()]} alt='image' className='image' style={{width:"80%" , height:"90%"}}/>

        </>
  );
}
export default AboutImg;

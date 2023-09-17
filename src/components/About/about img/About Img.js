import { Grid } from "@mui/material";
import construction from "../../../Asset/image/aboute.jpeg";
import mechanic from "../../../Asset/image/meca.jpg";
import { useEffect, useState } from "react";
function AboutImg(props) {
  const [image_index, setImageIndex] = useState(0);

  const image_list = [construction, mechanic];
  useEffect(() => {
    const _ = setInterval(() => {
      setImageIndex(image_index + 1);
    }, 5000);
  }, [image_index]);

  return (
    <>
      <img
        src={image_list[(image_index % image_list.length).toFixed()]}
        alt="image"
        className="image"
        style={{ width: "80%", height: "90%" }}
      />
    </>
  );
}
export default AboutImg;

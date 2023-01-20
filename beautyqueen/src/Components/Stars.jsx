import { Box } from "@chakra-ui/react";
import {AiOutlineStar, AiFillStar} from "react-icons/ai"
const Stars=()=>{
    <Box
  sx={{
    display: "inline-flex",
    position: "relative",
    cursor: "pointer",
    textAlign: "left",
  }}
>
  {[...new Array(10)].map((arr, index) => {
    return (
      <Box position="relative">
        <Box sx={{ width: "0%", overflow: "hidden", position: "absolute" }}>
          {/* <StarIcon /> */}
          <AiFillStar/>
        </Box>
        <Box>
          {/* <StarBorderIcon /> */}
          <AiOutlineStar/>
        </Box>
      </Box>
    );
  })}
</Box>;
}
export default Stars;
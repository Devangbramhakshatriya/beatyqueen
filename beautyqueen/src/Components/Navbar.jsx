import { Box, Button, HStack, Image, Input, Text} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {FaUser} from "react-icons/fa"
import { extendTheme } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"

}
const theme=extendTheme({breackpoints})
function Navbar(){
    return(
        <Box>
            <Box>
                <Image src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="Navbar"/>
            </Box>
            <Box mt={["2","3","4","4"]}>
                <HStack justifyContent="space-around">
                    <Image w={["100px", "150px","200px"]} src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt=""/>
                    <HStack>
                        <Input height={["30px", "40px","50px", "52px"]} w={["150px", "250px","400px","500px"]} type="text" placeholder="Enter Your Search..."/>
                        <Button w={["30px", "50px","60px", "62px"]} h={["30px", "40px","50px", "52px"]} bg="#DD0285" borderRadius="0%" ><BsSearch/></Button>
                    </HStack>
                    <Box>
                        {/* <Button w={["40px", "50px","60px"]} bg="transparent" ><Button h="35px"  borderRadius="0%" bg="transparent" border="1px solid black"><FaUser /></Button> My Account</Button> */}
                        <Button gap={["10px","15px","18px", "21px"]} borderRadius="0%" bg="transparent" w={["130px", "150px","180px", "210px"]}>
                        <FaUser length={["5px","10px"]}/>
                        <Text fontSize={["13px","15px","18px", "21px"]}>MyAccount</Text>
                        
                        </Button>
                    </Box>
                </HStack>
                
            </Box>
        </Box>
    )
}
export default Navbar;
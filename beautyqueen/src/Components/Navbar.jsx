import { background, Box, Button, HStack, Image, Input, Text} from "@chakra-ui/react";
import MediaQuery from "react-responsive"
import {BsSearch} from "react-icons/bs";
import {FaUser} from "react-icons/fa"
import {GiPianoKeys, GiShoppingBag} from "react-icons/gi"
import {IoIosArrowDown} from "react-icons/io"
import NavbarDrawer from "./NavbarDrawer";
import { extendTheme } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
const categoriesNavbar={
    display:"flex",
    color:"white",
    justifyContent:"space-around",
}
const categoriesNavbarText={
    display:"flex",
    fontFamily:"roboto",
    fontSize:["6px","8px","10px","14px"]
}
const icon={
    marginTop:"5px"
}


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
                        <Button w={["30px", "50px","60px", "62px"]} h={["30px", "40px","50px", "52px"]} bg="#DD0285" _hover={{bg:"pink.400"}} borderRadius="0%" ><BsSearch/></Button>
                    </HStack>
                    <Box>
                        {/* <Button w={["40px", "50px","60px"]} bg="transparent" ><Button h="35px"  borderRadius="0%" bg="transparent" border="1px solid black"><FaUser /></Button> My Account</Button> */}
                        <Button _hover={{bg:"#DD0285", color:"white"}} gap={["10px","15px","18px", "21px"]} borderRadius="0%" bg="transparent" w={["130px", "150px","180px", "210px"]}>
                        <FaUser color="#DD0285" />
                        <Text fontSize={["13px","15px","18px", "21px"]} >MyAccount</Text>
                        </Button>
                    </Box>
                </HStack>
            </Box>
                <Box  bg="#DD0285" fontSize={["13px","15px","18px", "21px"]} marginTop={["2","3","4","4"]}>
                <MediaQuery maxWidth={660}>
                    <Box display="flex" justifyContent="space-around" alignItems="center">
                    <NavbarDrawer/>
                    <Text h="40px" alignItems="center" style={categoriesNavbarText} _hover={{bg:"pink.400"}} color="white"  gap="3px"><GiShoppingBag style={{marginTop:"4px"}}/>MY CART</Text>
                    </Box>
                </MediaQuery>
                <MediaQuery minWidth={661}>
                <Box  style={categoriesNavbar}   >
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>MAKEUP <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>SKIN <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>HAIR <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>PERSONAL CARE <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>MOM & BABY CARE <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>FREGRANCE <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.400"}}  gap="3px"><GiShoppingBag style={icon}/>MY CART</Text>
                </Box>
                </MediaQuery>
            </Box>
            
            
            
        </Box>
    )
}
export default Navbar;
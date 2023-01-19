import { Box, Heading, ListItem, Text, List, Image, Input, Button} from "@chakra-ui/react";
import MediaQuery from "react-responsive"
import { extendTheme } from '@chakra-ui/react'

const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
function Footer(){
    return(
        <Box borderTop="1px solid #DD0285">
            <Box bg="#232323">
            <Box  display="flex" color="white" justifyContent="space-around">
                <MediaQuery maxWidth={660}>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">CONTACT INFO</Heading>
                    <List color="gray">
                    <Text>(+91) 7877061041</Text>
                    <Text>sales@beautyqueen.com</Text>
                    <Text>Call time: 10:00AM - 7:00PM</Text>
                    </List>
                </Box>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">QUICK NEWS</Heading>
                    <List color="gray"> 
                    <ListItem>About Us</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>Terms & Coundition</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Refund Plicy</ListItem>
                    </List>
                </Box>
                </MediaQuery>
                <MediaQuery minWidth={661}>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">CONTACT INFO</Heading>
                    <List color="gray">
                    <Text>(+91) 7877061041</Text>
                    <Text>sales@beautyqueen.com</Text>
                    <Text>Call time: 10:00AM - 7:00PM</Text>
                    </List>
                </Box>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">QUICK NEWS</Heading>
                    <List color="gray"> 
                    <ListItem>About Us</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>Terms & Coundition</ListItem>
                    <ListItem>Privacy Policy</ListItem>
                    <ListItem>Refund Plicy</ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">COSTOMER INFO</Heading>
                    <List color="gray">
                    <ListItem>My Order</ListItem>
                    <ListItem>Track Order</ListItem>
                    <ListItem>Order Return</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>FAQ</ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading marginBottom="10px" fontSize="20px" fontFamily="roboto" borderBottom="1px dashed #DD0285">CATEGORIES</Heading>
                    <List color="gray">
                    <ListItem>Makeup</ListItem>
                    <ListItem>Skin</ListItem>
                    <ListItem>Hair</ListItem>
                    <ListItem>Personal Care</ListItem>
                    <ListItem>Moms & Baby Care</ListItem>
                    </List>
                </Box>
                </MediaQuery>
            </Box>
            <Box  borderTop="1px solid white" paddingTop="10px" w={["95%","90%","80%","70%"]} margin="auto">
                    <Box display="flex" marginTop="10px" margin="auto">
                        <Image  w={["150px","200px","250px","280px"]} h={["25px","30px","40px","50px"]} src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" alt="carts"/>
                        <Text>Signup For Newslatter</Text>
                        <Input borderRadius="0%" bg="white" type="email" placeholder="Signup For Newslatter..."/>
                        <Button  w={["90px","100px","130px","150px"]} color="white" borderRadius="0%" bg="#DD0285" >Search</Button>
                    </Box>
                </Box>
            </Box>
            <Box bg="black" color="gray"><Text>© 2020 All Rights Reserved.</Text></Box>
        </Box>
    )
}
export default Footer;
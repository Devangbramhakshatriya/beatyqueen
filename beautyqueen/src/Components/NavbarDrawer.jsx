import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
    Box
  } from '@chakra-ui/react'
import React from 'react';
import {AiOutlineBars} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {GiPianoKeys, GiShoppingBag} from "react-icons/gi"

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

  function NavbarDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <Box>
        <Button ref={btnRef} bg="transparent" color="white" _hover={{bg:"pink.500"}} onClick={onOpen}>
          <AiOutlineBars/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Categories</DrawerHeader>
  
            <DrawerBody>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>MAKEUP <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>SKIN <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>HAIR <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>PERSONAL CARE <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>MOM & BABY CARE <IoIosArrowDown style={icon}/></Text>
                    <Text style={categoriesNavbarText} _hover={{bg:"pink.500"}}>FREGRANCE <IoIosArrowDown style={icon}/></Text>
                    
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }
export default NavbarDrawer;
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
function NoItem(){
    return(
        <Box p="20px">
            <Image m="auto" w={["150px","200px","250px","300px"]} src="https://iccha.in/empty%20cart%20icon.svg"/>
            <Heading>Your Cart is Empty</Heading>
            <Text>Looks like you haven't added anything to your cart yet</Text>
        </Box>
    )
}
export default NoItem;
import { Box, extendTheme, Heading, Text } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})

function HomeInformation(){
    return(
        <Box color="gray" w="90%" m="auto">
        <Heading p="15px" fontSize={["16","18","20","22"]}>Welcome to Beauty Products Online Shopping India- Beauty Bebo</Heading>
        <Text textAlign="start" fontSize={["10","10","12","14"]} >
        If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.<br/>

Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!<br/>

Clean Your Face First!<br/>

Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.<br/>

Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.
        </Text>
        </Box>
    )
}
export default HomeInformation;
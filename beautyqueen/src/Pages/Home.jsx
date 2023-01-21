import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import MediaQuery from "react-responsive"
import { extendTheme } from '@chakra-ui/react'
import {SlHandbag} from "react-icons/sl"
import HomeInformation from "../Components/HomeInformation";
import { useEffect, useState } from "react";

import axios from "axios"
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";

const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

function capitalName(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const theme=extendTheme({breackpoints})

function Home(){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false)
    const fetchData=()=>{
        setLoading(true)
        axios.get(` http://localhost:8080/mixdata`)
        .then((res)=>setData(res.data))
        .then((res)=>setLoading(false))
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(data)

    const NavigateUser=()=>{
        <Navigate to="/productdetails"/>    
        console.log("hi")
    }
    return(
        <Box>
        <Image src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg" alt="" m="auto"/>
        {
            loading? 
            <Box>
                <Loading/>
            </Box>
            
            :
            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)']} gap={6}  w="90%" margin="auto" >
        {
            data.map((e)=>(
                <RouterLink to={`/productdetails/${e.id}`}>
                <GridItem key={e.id}>
                    <Box display="flex" boxShadow="md">
                        <Box>
                            <Image src={e.image}/>
                        </Box>
                        <Box fontFamily="roboto">
                            <Text _hover={{color:"#DD0285"}} fontSize={["15px","12px","15px","17px"]} mb= {["3px","2px","3px","4px"]} color="#222222" textAlign="start">{capitalName(e.title)}</Text>
                            <Box display="flex" gap={["3px","2px","3px","3px"]} alignItems="center">
                                <Text color="gray" textDecoration="line-through" fontSize={["13px","11px","12px","13px"]}>{e["price 2"]}</Text>
                                <Text color="#DD0285" fontWeight="bold" fontSize={["19px","16px","18px","20px"]}>{e["price"]}</Text>
                                <Text color="green" fontSize={["15px","13px","14px","15px"]} fontWeight="bold">{e["price-box"]}</Text>
                            </Box>
                            <Button m={["4px","5px","7px","7px"]} w={["150px","120px","130px","150px"]} fontSize={["14px","12px","13px","14px"]} color="white" bg="#DD0285" _hover={{bg:"pink.500"}} gap={2}><SlHandbag/>Add To Cart</Button>
                        </Box>
                    </Box>
                </GridItem> 
                </RouterLink>
            ))
        }
        </Grid>
        }

        
        <Box display="flex" m="auto" gap="5px">
            <MediaQuery maxWidth={480}>
            <Image m="auto" src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt=""/>    
            </MediaQuery>
            <MediaQuery minWidth={481}>
            <Image w={["300px", "300px","400px","600px"]} m="auto" src="https://www.beautybebo.com/pub/media/ads/joy_banner.gif" alt=""/>
            <Image w={["300px", "300px","400px","600px"]} m="auto" src="https://www.beautybebo.com/pub/media/ads/lotus_banner.gif" alt=""/>
            </MediaQuery>
        </Box>  
        <Box>
            <Image m="auto" src="https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif" alt=""/>
            <HomeInformation/>
        </Box>
        </Box>
    )
}
export default Home;
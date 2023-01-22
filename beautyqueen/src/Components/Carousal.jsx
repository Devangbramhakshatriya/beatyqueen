import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { background, Box, Button, HStack, Image, Input, Text} from "@chakra-ui/react";
import {SlHandbag} from "react-icons/sl"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import {Link as RouterLink} from "react-router-dom";
import { extendTheme } from '@chakra-ui/react'
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})

const cart=JSON.parse(localStorage.getItem("cart"))||[];
export default function Carousal({data}) {
console.log(data)
  function capitalName(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const AddProduct=(e)=>{
  
      cart.push(e)
  localStorage.setItem("cart",JSON.stringify(cart))
  }
 
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          data.map((e)=>(
            
            <SwiperSlide key={e.id}>
              <RouterLink to={`/productdetails/${e.id}`}>
              <Box  boxShadow="md" bg="#F9F9F9" p="15px">
                        <Box>
                            <Image src={e.image}/>
                        </Box>
                        <Box fontFamily="roboto">
                            <Text _hover={{color:"#DD0285"}} fontSize={["12px","12px","15px","17px"]} mb= {["3px","2px","3px","4px"]} color="#222222" textAlign="start">{capitalName(e.title)}</Text>
                            <Box display="flex" gap={["3px","2px","3px","3px"]} alignItems="center">
                                <Text color="gray" textDecoration="line-through" fontSize={["13px","11px","12px","13px"]}>{e["price 2"]}</Text>
                                <Text color="#DD0285" fontWeight="bold" fontSize={["19px","16px","18px","20px"]}>{e["price"]}</Text>
                                <Text color="green" fontSize={["12px","13px","14px","15px"]} fontWeight="bold">{e["price-box"]}</Text>
                            </Box>
                            <Button onClick={()=>AddProduct(e)} m={["4px","5px","7px","7px"]} w={["90px","100px","130px","150px"]} fontSize={["14px","12px","13px","14px"]} color="white" bg="#DD0285" _hover={{bg:"pink.500"}} gap={2}><SlHandbag/>Add To Cart</Button>
                        </Box>
                    </Box>
                    </RouterLink>
            </SwiperSlide>
            
          ))
        }
        {/* <SwiperSlide><Image src="https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/h/n/hnejhfeuh.jpg" alt=""/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
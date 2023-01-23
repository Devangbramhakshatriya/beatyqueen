import { Box,Text,Image,Button,useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {SlHandbag} from "react-icons/sl"
import { extendTheme } from '@chakra-ui/react'
import Loading from "../Components/Loading";

const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
const cart=JSON.parse(localStorage.getItem("cart"))||[];

function ProductDetails(){
    const {id}=useParams()
    console.log(id)

    const [data,setData]=useState({});
    const [loading,setLoading]=useState(false)
    const fetchData=()=>{
        setLoading(true)
        axios.get(`https://beautyqueen1.onrender.com/mixdata/${id}`)
        .then((res)=>setData(res.data))
        .then((res)=>setLoading(false))
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    console.log(data)
    const AddProduct=(e)=>{
        e.quantity=1
        cart.push(e)
        alert("Product Added")
        localStorage.setItem("cart",JSON.stringify(cart))
        console.log(e)
        
    }
    return(
        <Box>
             {
            loading? 
            <Box>
                <Loading/>
            </Box>
            :
            <Box display={["inline-block","","flex","flex"]} boxShadow="md" justifyContent="center" p="20px" m="20px">
                        <Box>
                            <Image m="auto" src={data.image} w={["200px ","250px","350px","400px"]}/>
                        </Box>
                        <Box fontFamily="roboto" mt={["40px","50px","80px","100px"]}>
                            <Text _hover={{color:"#DD0285"}} fontSize={["15px","19px","23px","25px"]} fontWeight="bold" mb= {["3px","2px","5px","7px"]} color="#222222" textAlign="start">{data.title}</Text>
                            <Box display="flex" gap={["3px","2px","7px","10px"]} alignItems="center">
                                <Text color="gray" textDecoration="line-through" fontSize={["13px","15px","16px","18px"]}>{data["price 2"]}</Text>
                                <Text color="#DD0285" fontWeight="bold" fontSize={["19px","23px","25px","30px"]}>{data["price"]}</Text>
                                <Text color="green" fontSize={["15px","18px","20px","23px"]} fontWeight="bold">{data["price-box"]}</Text>
                            </Box>
                            <Button onClick={()=>AddProduct(data)} ml={["4px","5px","-270px","-300px"]} mt={["10pxpx","20px","50px","70px"]} w={["150px","180px","250px","300px"]} fontSize={["14px","12px","16px","18px"]} color="white" bg="#DD0285" _hover={{bg:"pink.500"}} gap={2}><SlHandbag/>Add To Cart</Button>
                        </Box>
                    </Box>
        }
        </Box>
    )
}
export default ProductDetails;
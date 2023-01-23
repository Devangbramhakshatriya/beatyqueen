import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { extendTheme } from '@chakra-ui/react'
import { useEffect } from "react";
import {RiDeleteBin6Line} from "react-icons/ri"
import NoItem from "../Components/NoItem";
const breackpoints={
    base:"490px",
    md:"600px",
    lg:"850px",
    xl:"950px",
    "2xl":"1200px"
}

const theme=extendTheme({breackpoints})
function Cart(){
    
    const [data,setData]=useState([])
    // const [total,setTotal]=useState(0)
    // const getTotal=()=>{
    //     let gTotal=data.reduce((e)=>{
    //         // setTotal(total+(+(e.price=e.price.replace('₹',""))))
    //         // return (
    //         //     (e.price=e.price.replace('₹',""))*e.quantity
                
    //         // )
    //         let p= +(e.price.replace('₹',""))
    //         return p*e.quantity
    //     })
    //     setTotal(gTotal)
    //     localStorage.setItem("Total",total)
    // }
    // const [quantity,setQuantity]=useState(1)
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("cart"))||[])
        // if(data.length==0){
        //     setTotal(0)
        //     localStorage.setItem("Total",total)
        // }else{
        //     getTotal() 
        // }
        
    },[])
   

    const RemoveItem=(e,i)=>{
        data.splice(i,1)
        localStorage.setItem("cart",JSON.stringify(data))
        // setTotal(total-e.price)
        // localStorage.setItem("Total",total)
        window.location.reload()
    }
    const HandleInc=(val,i)=>{
        // setQuantity(quantity+val)
        data[i].quantity=val+1
        localStorage.setItem("cart",JSON.stringify(data))
        setData(JSON.parse(localStorage.getItem("cart"))||[])
        // getTotal()
    }
    const HandleDic=(val,i)=>{
        // setQuantity(quantity+val)
        data[i].quantity=val-1
        localStorage.setItem("cart",JSON.stringify(data))
        setData(JSON.parse(localStorage.getItem("cart"))||[])
        // getTotal()
    }
    return(
        <Box>
            {
                data.length<=0? <NoItem/>:
                
                    data.map((e,i)=>(
                        
                        <Box key={e.id} display="flex" boxShadow="md" p="20px" gap="5px">
                            <Box>
                                <Image src={e.image} alt={e.title}/>
                            </Box>
                            <Text mt={["10px","10px","15px","20px"]} fontSize={["13px","13px","15px","18px"]} fontWeight="bold">{e.title}</Text>
                            <Box >
                            <Box display="flex" fontWeight="bold" fontSize={["11px","12px","14px","16px"]}>
                               <Text >Price: <br/>{e.price}</Text>
                              
                               <Text >Quantity: <br/> <Box display="flex">
                                <Button isDisabled={e.quantity==1} onClick={()=> HandleDic(e.quantity,i)}> 
                                - 
                                </Button>
                                {e.quantity}
                                <Button onClick={()=>HandleInc(e.quantity,i)}>
                                +
                                </Button>
                                </Box> </Text>
                               
                               <Text>Sub Total:<br/>{e.quantity*(+(e.price=e.price.replace('₹',"")))}</Text>
    
                            </Box>
                            <Button mt="5px" bg="none" border="1px solid gray" onClick={()=>RemoveItem(e,i)}><RiDeleteBin6Line/></Button>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
    )
}
export default Cart;
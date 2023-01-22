import { Box, Text } from "@chakra-ui/react";

function Logout(){
    const HandleLogout=()=>{
        localStorage.setItem("loginStatus",false)
        window.location.reload()
    }
    return(
        <Box onClick={HandleLogout}>
            <Text>Logout</Text>
        </Box>
    )
}
export default Logout;
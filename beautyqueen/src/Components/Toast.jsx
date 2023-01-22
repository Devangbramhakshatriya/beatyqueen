import { Button, useToast } from '@chakra-ui/react'
function Toast() {
    const toast = useToast()
    console.log("hi")
    return (
      
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
            position:"top"
          })
    )
  }
  export default Toast;
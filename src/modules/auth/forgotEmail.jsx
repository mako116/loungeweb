import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Field,
  Fieldset,
  Stack,
   Text,
  Spinner,
} from "@chakra-ui/react";
 
import LoungeLogo from "../../assets/Frame.png";
//  import Google from "../../assets/google.png";
//  import divder from "../../assets/Dividers.svg";
// import { BiHide, BiShow } from "react-icons/bi";
// import {useRequest} from '../../hooks/useRequest'
// import { toast } from "react-toastify";

function ForgotEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const {makeRequest, loading} = useRequest()
  const [email, setEmail] = useState('')
 
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

     const navigate = useNavigate()

    const handlePasswordPage = async() =>{
//       const res = await makeRequest('/check-email-exists', {email});
//       if(res.error) return;
//       toast.success('We have sent an OTP to your email. Use it to reset your password');
//     setTimeout(()=>{
        navigate("/reset-password")
//     }, 2000)
     

    }
  // if (isLoading) {
  //   return (
  //     <Flex
  //       align="center"
  //       justify="center"
  //       h="100vh"
  //       w="full"
  //       color="#0A2EE2"
  //     >
  //       <Spinner size="xl" thickness="4px" speed="0.65s" />
  //     </Flex>
  //   );
  // }

  return (
    <Flex minH={{base:"100vh",lg:'100%'}} w="full" fontFamily="Poppins" overflow="hidden">
      {/* LEFT SIDE */}
      <Flex
        display={{ base: "none", lg: "flex" }}
        flexDir="column"
        justify="space-between"
        w={'45%'}
        px={2}
        py={2}
      >
        <Image src={LoungeLogo} alt="Lounge Logo" />
      </Flex>
     <Flex
        flex="1"
         bg="white"
        px={{ base: 6, md: 12 }}
        mt={'10%'}
        // justify="center"
        // align="center"
      >
        <Fieldset.Root  w={'100%'} size="lg" maxW={{base:'100%',lg:"lg"}}>
       <Fieldset.Legend fontFamily={'inter'}  
        color={'rgba(27, 24, 24, 1)'} 
        fontWeight={'600'} 
        fontSize={{base:24,md:36}}> Add your Email here!</Fieldset.Legend>
        
      <Fieldset.Content>
        <Field.Root   fontFamily={'inter'}  >
        <Field.Label   
         color={'rgba(27, 24, 24, 1)'} 
         fontWeight={'500'} 
       
         fontSize={{base:12,md:14}}
        >Email address</Field.Label>
          <Input name="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"  fontFamily={'inter'}  borderColor={'rgba(112, 122, 131, 0.3)'} _placeholder={{ color: 'rgba(112, 122, 131, 1)', fontSize:{base:12,md:14}}} fontSize={{base:12,md:14}}  mb={4} mt={2}  focusBorderColor="blue.500" size="lg"
          py={{base:3,md:7}} />
        </Field.Root>

         
      </Fieldset.Content>

      <Button  fontFamily={'inter'}  
      onClick={handlePasswordPage} 
      alignSelf="flex-start" w={'100%'} py={7} rounded={5}>
{/* {
  loading? <Spinner/>:'send'
}  */}
Send
      </Button>
       </Fieldset.Root>
      </Flex>

     </Flex>
  );
}

export default ForgotEmail;

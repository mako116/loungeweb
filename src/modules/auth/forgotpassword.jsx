import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Input,
  Button,
  Field,
  Fieldset,
  PinInput,
  Spinner,
} from "@chakra-ui/react";
 
import LoungeLogo from "../../assets/Frame.png";
 import Google from "../../assets/google.png";
 import divder from "../../assets/Dividers.svg";
 import { useRequest } from "../../hooks/useRequest";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {makeRequest, loading} = useRequest()
const passwordRef = useRef('')

  const otpRef = useRef('');
  const emailRef = useRef('')
 
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

     const navigate = useNavigate()


    const handleReset = async () =>{
      if(!emailRef.current.value || !otpRef.current || !passwordRef.current.value){
        return toast.error('All fields are required');
      }
      const res = await makeRequest('/reset-password', {
        email:emailRef.current.value,
        otp: otpRef.current,
        password: passwordRef.current.value
      })
    //  navigate("/login")
   
    if(res.error) return;

    toast.success(res.response.message);

    setTimeout(()=>{
      navigate('/login');
    }, 2000);

    }
  if (isLoading) {
    return (
      <Flex
        align="center"
        justify="center"
        h="100vh"
        w="full"
        color="#0A2EE2"
      >
        <Spinner size="xl" thickness="4px" speed="0.65s" />
      </Flex>
    );
  }

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
        justify="center"
        align="center"
      >
        <Fieldset.Root  w={'100%'} size="lg" maxW={{base:'100%',lg:"lg"}}>
       <Fieldset.Legend fontFamily={'inter'}  
        color={'rgba(27, 24, 24, 1)'} 
        fontWeight={'600'} 
        fontSize={{base:24,md:36}}> Reset Password!</Fieldset.Legend>
        
      <Fieldset.Content>
        
        
         <Field.Root   fontFamily={'inter'}  >
        <Field.Label   
         color={'rgba(27, 24, 24, 1)'} 
         fontWeight={'500'} 
       
         fontSize={{base:12,md:14}}
        >Enter OTP Code
        </Field.Label>
         <PinInput.Root otp  fontFamily={'inter'} 
                
                 onValueChange={(value) => otpRef.current = value.valueAsString}  // live changes
                mx={{base:'1',md:'auto'}}>
              <PinInput.HiddenInput  />
              <PinInput.Control >
                <PinInput.Input w={16} index={0} />
                <PinInput.Input w={16} index={1} />
                <PinInput.Input w={16} index={2} />
                <PinInput.Input w={16} index={3} />
              </PinInput.Control>
              </PinInput.Root>
              </Field.Root>

             <Field.Root  fontFamily={'inter'}  >
           <Field.Label 
             color={'rgba(27, 24, 24, 1)'} 
              fontWeight={'500'} 
              fontSize={{base:12,md:14}}>
               Email</Field.Label>
               <Input name="email" 
                position={'relative'}
                ref={emailRef}
                type="email"
                py={{base:3,md:7}}  />
               
        </Field.Root>

         <Field.Root  fontFamily={'inter'}  >
           <Field.Label 
             color={'rgba(27, 24, 24, 1)'} 
              fontWeight={'500'} 
              fontSize={{base:12,md:14}}>
               New Password</Field.Label>
               <Input name="password" 
                position={'relative'}
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                py={{base:3,md:7}}  />
                <span
                 onClick={() => setShowPassword(!showPassword)}
                 className="absolute  bottom-0  right-4 -translate-y-1/2 cursor-pointer text-gray-500 flex items-center gap-1 text-sm"
               >
                 {showPassword ? (
                <>
                 <BiShow /> Show
              </>
               ) : (
             <>
            <BiHide /> Hide
            </>
         )}
        </span>
        </Field.Root>
      </Fieldset.Content>

      <Button  fontFamily={'inter'}  onClick={handleReset} alignSelf="flex-start" w={'100%'} py={7} rounded={5}>
        {
          loading? <Spinner/>:'Send'
        }
      </Button>
       </Fieldset.Root>
      </Flex>

     </Flex>
  );
}

export default ResetPassword;

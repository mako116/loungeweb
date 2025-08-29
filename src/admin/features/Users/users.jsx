import { Box, Button, createListCollection, Flex, HStack, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import { DashboardTabpanel } from "./TabPanel";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Dropdown } from "../../components/select/Dropdown";
import { FaLocationDot } from "react-icons/fa6";


export  const frameworks = createListCollection({
  items: [
    { label: "Experience", value: "Experience" },
    { label: "finances", value: "finances" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})
export const UsersHome = () => {


  return (
    <Box h="100vh" bg="#F5F6FA" px={6}>
       <Stack mb={3} px={2} w={{base:100,md:600}} flexDirection={'row'} alignItems={'center'} >
             <InputGroup  startElement={<BiSearch size={10} />}>
              <Input py={25} 
               fontSize={10} 
               borderRadius={10} 
               placeholder="Name, Industry & Skill" />
             </InputGroup>
             <InputGroup  
              startElement={<FaLocationDot 
              size={10} />}>
               <Input py={25} fontSize={10} borderRadius={10} placeholder="Location" />
             </InputGroup>
              <Flex w={'100%'}  gap={3}  display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <Dropdown
                  frameworks={frameworks}
                  icon/>
                   
                  </Flex>
          </Stack>
      {/* <DashboardCard/> */}
      <DashboardTabpanel/>
    </Box>
  );
};

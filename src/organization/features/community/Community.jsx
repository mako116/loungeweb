import { Box, Heading, HStack } from "@chakra-ui/react"
import { LeftSide } from "./LeftSide"
import { RightSide } from "./RightSide"

export const OrganizationCommunity = () => {
  return (
    <Box>
    <Heading p={4}>
       Community
    </Heading>
   <HStack 
   justifyContent={'space-between'} 
   flexDirection={{base:'column',md:'row'}} 
   gap={5} 
   alignItems={'center'} 
   px={4}>
    <LeftSide/>
    <RightSide />
   </HStack>
   </Box>
  )
}

import { Box, VStack, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import banner from "../../../assets/banner.png"
import { LuClock3 } from "react-icons/lu";
import { AiOutlinePlayCircle } from "react-icons/ai";

export function Banner() {
  return (
    <Box
      flex="2"
      bg="linear-gradient(135deg, #2B362F, #2B362F)"
      borderRadius="2xl"
      p={8}
      color="white"
      boxShadow="xl"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {/* Left content */}
      <VStack gap={5} align="flex-start" spacing={4} maxW="60%">
        <Text 
        fontWeight={'400'}
        fontSize={'12px'}
        textTransform={'uppercase'}
        >
            UPCOMING EVENT
        </Text>
        <Heading  fontSize={{base:'19px',md:'24px'}} 
        fontWeight={'600'}>
            The 2025 Web Developers Summit:
            Beginners’ Guide to Coding
       </Heading>
         <Flex gap={3} alignItems={'center'}>
        <Text color={'gray.300'} fontSize="sm" fontWeight="medium">
          Friday, 6 July 
        </Text>
        <LuClock3/>
        <Text color={'gray.300'} fontSize="sm" fontWeight="medium">
         11.30 - 12.00 (30 min)
        </Text>
        </Flex>
        <Button
          bg="#202020"
          color="#fff"
          _hover={{ bg: "gray.100" }}
          size="lg"
          rounded="xl"
          shadow="md"
        >
          Join Now
         <AiOutlinePlayCircle />
        </Button>
      </VStack>

      {/* Right image */}
      <Image
        src={banner}
        alt="Event Banner"
        boxSize={{ base: "120px", md: "200px" }}
        borderRadius="xl"
        objectFit="cover"
        shadow="lg"
      />
    </Box>
  );
}

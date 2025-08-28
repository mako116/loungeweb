import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  HStack,
  Stack,
  Text,
  IconButton,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import tick from "../../../assets/Verified tick.png";

 

export const ReusableUserDetailsCard = ({
  badge,
  description,
  title,
  image,
  VerifiedMentore,
  timestamp,
  color,
  Deactivate,
  maskOnToggle = false,
  toggle = false,
  id,
  bonusDate,
  UserName,
  ticks,
  timestamps
}) => {
  const [showDescription, setShowDescription] = useState(true);

  return (
    <Card.Root width="100%" rounded={10}>
      <Card.Body gap="0">
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Stack>
            <Card.Title
              mt="0"
              fontFamily={"nunitoRegular"}
              fontSize={{ base: 13, md: 16 }}
              color={"#606060"}
            >
              {title}
              {image && (
                <Avatar.Root size={{ base: "md", md: "lg" }} rounded={23}>
                  <Avatar.Image src={image} />
                  <Avatar.Fallback name={title} />
                </Avatar.Root>
              )}
              {ticks && 
              <Image
                src={tick}
                alt="tick"
                w={4}
                position={'absolute'}
                top={'14'}
                left={'14'}
                borderRadius="md"
                objectFit="cover"
              />
              }
            </Card.Title>
             {UserName && (
              <Card.Description
                fontFamily={"nunitoBold"}
                fontSize={{ base: 13, md: 18 }}
                color={"#202224"}
              >
                {UserName}
              </Card.Description>
            )}

            {/* Conditionally show description */}
           {toggle ? (
           <Card.Description
            fontFamily={"nunitoBold"}
            fontSize={{ base: 18, md: 28 }}
            color={"#202224"}>
            {showDescription ? description : "******"}
         </Card.Description>
          ) : (
        <Card.Description
         fontFamily={"nunitoBold"}
         fontSize={{ base: 18, md: 28 }}
         color={"#202224"}
         >
         {description}
      </Card.Description>
       )}
         <Text mt={-2}>
             {id}
           </Text>
          </Stack>

             {Deactivate && <Button 
            top={'5'}
            bg={'transparent'}
            border={'1px solid #FF2B2B'}
            color={'#FF2B2B'}
            right={5}
            position={'absolute'}>Deactivate</Button>}

            {/* 👁️ Toggle button only shows if prop is true */}
            {toggle && (
              <Button
                top={5}
                right={5}
                 position={'absolute'}
                aria-label="Toggle Description"
                variant="ghost"
                 onClick={() => setShowDescription((prev) => !prev)}
                 
              >
               {showDescription ? <BsEyeSlash /> : <BsEye />} 
              </Button>
            )}
         </HStack>
      </Card.Body>

      <Card.Footer
        fontSize={{ base: 12, md: 15 }}
        fontFamily={"nunitoSemiBold"}
        color={"#606060"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Flex alignItems={'center'} gap={2} color={color}>
          <Image w={5} src={badge} />
         <Text
         fontSize={{ base: 10, md: 14 }}
        // fontFamily={"nunitoSemiBold"}
          color={"#606060"}
          >{VerifiedMentore}</Text>
          
         </Flex> 
           <Text
            fontSize={{ base: 10, md: 14 }}
            flexDirection={"column"}
            justifyContent={'space-between'}
             fontFamily={'InterRegular'}
           
         >
            {timestamps}</Text>

          <Box ml={'-9'}>
            <Text 
            fontFamily={'InterMedium'}
            fontWeight={'medium'}
            color={'#333333'}>
                {bonusDate}
            </Text>
            <Text
            color={'#949494'}
            fontFamily={'InterRegular'}
            fontSize={{ base: 10, md: 14 }}
            flexDirection={"column"}
            justifyContent={'space-between'}
           
         >
            
            {timestamp}</Text>
         </Box>
      </Card.Footer>
    </Card.Root>
  );
};

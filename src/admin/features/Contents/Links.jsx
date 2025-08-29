import { Box, Button, HStack, Image, Input, InputGroup, Stack, Text } from '@chakra-ui/react'
import { cardData } from '../../../hooks/useData'
import { CiSearch } from 'react-icons/ci';
import { RxDotsVertical } from 'react-icons/rx';
import { CreateLink } from './Modal/CreateLink';
import { useState } from 'react';
 
export const AdminLinks = () => {
    const truncateTexts = (text, maxLength) => {
  if (!text) return "";
  return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
   };
   
     const [isOpen, setIsOpen] = useState(false);
   
      const handleCardClick = () => {
     setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
   };
  return (
    <Box  h={'120%'} mb={'10%'}  p={5}>
     
    {cardData.map((card, idx) => (
      <HStack>
        <Box w={{base:'100%',md:700}} 
        rounded={10} 
        my={4} 
        p={5} 
        shadow={'sm'}
        shadowColor={'#3E67A52E'}
        bg="#fff" 
        border={'1px solid #3E67A52E'}>
          <HStack>
                  <Image
                   src={card.subimage} 
                   alt="Speaker" 
                   boxSize="40px" 
                   rounded="full" />
                  <Stack spacing={0}>
                    <Text color="#070B28" fontSize={{ base: 10, md: 12 }} 
                    fontFamily="InterRegular">
                      The Lounge Team
                    </Text>
                    <Text 
                     fontFamily="InterRegular"
                    color="#808291" mt={-1} 
                    textDecoration={'underline'}
                    fontSize={{ base: 9, md: 11 }}>
                    {truncateTexts(card.title)}
                    </Text>
                  </Stack>
             </HStack>
       </Box> 
        <Button
      onClick={handleCardClick}
       bg={'transparent'}
       rounded={50}
       p={0}
       color={'#33333399'}
       border={'1px solid #E4E4E4'}
       >
       <RxDotsVertical size={10}/>
      </Button> 
       </HStack>
     ))}
     
     <CreateLink
     isOpen={isOpen}
     onClose={handleClose}
     />
    </Box>
     
  )
}

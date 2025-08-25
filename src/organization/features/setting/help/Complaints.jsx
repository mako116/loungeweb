import { Box, Heading, HStack, Span, Text } from '@chakra-ui/react'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
 
export const Complaints = () => {
  return (
    <Box 
    w={'100%'}
    border={'1px solid #fff'}
    mb={'auto'}
    mt={4}
    bg={'#fff'}
    rounded={10}
      shadow={'xs'} p={4} 
      h={'100%'}
     >
        <Heading color={'#1A1A21'} 
        fontSize={{base:15,md:18}}
        fontFamily="InterBold" >
            Complaints
        </Heading>
        <Text 
        pt={1}
        fontWeight={'normal'}
        fontFamily="InterRegular" 
       lineHeight={'20px'}
        fontSize={{base:12,md:14}}
        color={'#8C94A6'}>
            This is were you type in your complaints and we respond as soon as we can
        </Text>
        <Text  
        fontWeight={'normal'}
        fontFamily="InterMedium" 
       lineHeight={'20px'}
        fontSize={{base:12,md:14}}
        color={'#101928'}
        pt={5}  >
            Call Us
        </Text>
        <HStack rounded={5} my={2} shadow={'md'}  p={3}>
            <FiPhone color={'#667185'} />
            <Text 
            fontWeight={'normal'}
            fontFamily="InterRegular" 
            lineHeight={'20px'}
            fontSize={{base:12,md:14}}
            color={'#8C94A6'}
            >+44 567 547 8907</Text>
        </HStack>
        <Text  fontWeight={'normal'}
             fontFamily="InterMedium" 
             lineHeight={'20px'}
             fontSize={{base:12,md:14}}
             color={'#101928'}
             pt={5} >
            Call Us
        </Text>
        <HStack shadow={'md'} my={2} p={3} rounded={5}>
            <MdOutlineMailOutline color={'#667185'} />
            <Text 
             fontWeight={'normal'}
             fontFamily="InterRegular" 
             lineHeight={'20px'}
             fontSize={{base:12,md:14}}
             color={'#98A2B3'}
          >+44 567 547 8907</Text>
        </HStack>
    </Box>
  )
}

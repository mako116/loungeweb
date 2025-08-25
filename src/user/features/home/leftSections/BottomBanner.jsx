import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import notify2 from '../../../../assets/coin.png'

export const BottomBanner = () => {
  return (
    <Box bg={'#6C3433'} rounded={30}>
        <Stack py={10} px={{base:10,md:24}}>
            <Text fontFamily="InterBold" color={'#fff'}>
                Tommy Hilfiger
            </Text>
             <Text fontFamily="InterBold" color={'#fff'} fontSize={{base:24,md:37}} maxW={{base:"100%",md:500}}>
                Enjoy a 20% discount on products from our partner
            </Text>
            <Button 
            rounded={30} 
            bg={'#512726'} 
            maxW={{base:100}}>
                 <Image
                  src={notify2}
                  alt="Update"
                  boxSize="22px"
                  rounded={0} />
                300
            </Button>
            <Button rounded={10} mr={'auto'}>
                claim Benefit
            </Button>
        </Stack>
    </Box>
  )
}

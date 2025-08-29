import {
  Dialog,
  Portal,
  CloseButton,
  Stack,
  HStack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

export const ProfileDetailsModal = ({ isOpen, onClose, profile }) => {
  if (!profile) return null;
 
  // Truncate subtitle if more than 40 words
  const truncateSubtitle = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > 40 ? words.slice(0, 40).join(" ") + " ..." : text;
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius="lg" bg="#FAFAFA" p={4}>
            <Dialog.CloseTrigger rounded={30} border={'1px solid #9E9E9E'} asChild>
              <CloseButton size="xs" color={'#9E9E9E'} />
            </Dialog.CloseTrigger>
            <Stack spacing={0}>
                <Text
                  fontWeight="400"
                  fontFamily="InterRegular"
                  fontSize={{ base: 10, md: 14 }}
                  color="#202020"
                >
                  Blogs
                </Text>
                <Text
                  fontFamily="InterMedium"
                  fontSize={{ base: 18, md: 22 }}
                  color="#202020"
                  lineHeight={1.5}
                  mb={4}
                >
                  {truncateSubtitle(profile.title)}
                </Text>
              </Stack>
            <Stack spacing={4}>
              <Image
                src={profile.eImage}
                alt={profile.title}
                w="100%"
                h={{ base: "200px", md: "300px" }}
                objectFit="cover"
                rounded="xl"
                mb={4}
              />

              <Stack spacing={0}>
                
                <Text
                  fontFamily="LatoRegular"
                  fontSize={{ base: 14, md: 16 }}
                  color="#1C1C1CB2"
                >
                  {truncateSubtitle(profile.subtitle)}
                </Text>
              </Stack>

              <HStack pt={2} spacing={4} align="center">
                <Image
                  src={profile.subimage}
                  alt="Update"
                  boxSize="30px"
                  rounded="full"
                />
                <Stack spacing={0}>
                  <Text
                    color="#202020"
                    fontSize={{ base: 10, md: 12 }}
                    fontFamily="InterMedium"
                  >
                    The Lounge Team
                  </Text>
                  <Text mt={-3} color="#202020" fontSize={{ base: 9, md: 11 }}>
                    {profile.date}
                  </Text>
                </Stack>
              </HStack>
              <HStack justifyContent={'flex-end'}>
                <Button
                onClick={()=> onClose()}
                  bg={'transparent'}
                  color={'#33333399'}
                  border={'1px solid #E4E4E4'}
                >
                 Remove Article 
                </Button> 
                <Button 
                onClick={()=>onClose()}
                px={{base:5,md:10}}>
                  Cancel 
                </Button>
              </HStack>
            </Stack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

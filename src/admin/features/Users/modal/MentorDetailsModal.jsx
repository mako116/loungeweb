import {
  Dialog,
  Portal,
  CloseButton,
  Stack,
  HStack,
  Image,
  Text,
  Box,
  Card,
  Avatar,
  Button,
  Heading,
  List,
} from "@chakra-ui/react";
import viewProfile from "../../../../assets/viewProfile.png";
import { BiTrash } from "react-icons/bi";
 
export const AdminMentoringDetails = ({ isOpen, onClose, profile }) => {
  if (!profile) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded={30} bg="#FAFAFA" p={4} 
          maxW={{base:'sm',md:"md"}}>
            <Dialog.CloseTrigger
              rounded={30}
              border={"1px solid #9E9E9E"}
              asChild
            >
              <CloseButton size="xs" color={"#9E9E9E"} />
            </Dialog.CloseTrigger>

            <Box bg={"#FAFAFA"} h={"100%"} w={"100%"} p={5}>
              {/* Main Profile Card */}
              <Card.Root
                bg={"#fff"}
                shadowColor={"#080F340F"}
                shadow={"sm"}
                rounded={20}
                border={"1px solid #fff"}
              >
                <Card.Body  gap="2">
                  <Avatar.Root mx={"auto"} boxSize={20} rounded={50}>
                    <Avatar.Image src={profile.eImage} />
                    <Avatar.Fallback name={profile.title} />
                  </Avatar.Root>
                  <Text textAlign={"center"}
                        color={'#070416'}
                        fontSize={{base:12,md:16}}
                        fontFamily="InterRegular">
                        Manuel Neuer
                     </Text>
                    <Text textAlign={"center"}
                      color={'#64626D'}
                      fontSize={{base:12,md:16}}
                      fontFamily="LatoRegular"
                      >
                       Web Developer
                     </Text>
                     <Card.Title
                       mt="2"
                       color={'#070416'}
                       fontSize={{base:12,md:16}}
                       textAlign={"center"}
                       fontFamily="InterBold"
                       >
                      {profile.title}
                    </Card.Title>
                </Card.Body>
                <Card.Footer flexDirection={'column'}>
                  <Button
                    w={"full"}
                    fontFamily="InterRegular"
                    fontSize={12}
                    rounded={20}
                    p={6}
                  >
                    Edit Session
                  </Button>
                  
                </Card.Footer>
              </Card.Root>

              {/* BIO */}
              <Card.Root shadow={'sm'} size="sm" px={5} rounded={20} mt={4}>
                <Card.Header>
                  <Heading size={{base:'sm',md:"md"}} 
                  fontFamily="InterRegular" 
                  fontSize={12}>
                    Price
                  </Heading>
                  <Text>
                    E500
                  </Text>
                </Card.Header>
                {/* <Card.Body mt={-3} color="fg.muted">
                   <Stack>
                         <List.Root
                          display={"flex"}
                          flexDirection={"row"}
                           gap={6}
                           pl={3}
                           color={"#7C7C7C"}
                           >
                          {profile.desc}
                        </List.Root>
                    </Stack>
                </Card.Body> */}
              </Card.Root>

              {/* EXPERIENCE */}
              <Card.Root
                px={5}
                fontFamily="InterRegular"
                fontSize={12}
                size="sm"
                shadow={'sm'}
                rounded={20}
                mt={4}
              >
                <Card.Header>
                  <Heading size="md">Description</Heading>
                </Card.Header>
                <Card.Body mt={-2} color="fg.muted">
                  <List.Root>
                       <List.Item >{profile.desc}</List.Item>
                       <List.Item >{profile.desc2}</List.Item>
                       <List.Item >{profile.desc3}</List.Item>
                
                  </List.Root>
                </Card.Body>
              </Card.Root>

              {/* SOCIALS */}
              <Card.Root  mb={4} shadow={'sm'} size="sm" px={2} rounded={20} mt={4}>
                <Card.Header>
                  <Heading size="md">Categories</Heading>
                </Card.Header>
                <Card.Body flexDirection={{base:'row',md:'column'}} color="#6C3433" gap={4} >
                 <List.Root  color="#6C3433" flexDirection={{base:'column',md:'row'}} gap={10} px={5}>
                       <List.Item color="#6C3433">Finance</List.Item>
                       <List.Item color="#6C3433">Accounting</List.Item>
                       <List.Item color="#6C3433">Business</List.Item>
                  </List.Root>
                  <List.Root flexDirection={{base:'column',md:'row'}} gap={10} px={5}>
                       <List.Item color="#6C3433">Finance</List.Item>
                       <List.Item color="#6C3433">Accounting</List.Item>
                       <List.Item color="#6C3433">Business</List.Item>
                  </List.Root>
                </Card.Body>
               
              </Card.Root>
               
            </Box>
            <Box  
                p={2}
               justifyContent={'flex-end'}>
                     <Button border={'1px solid #D0D5DD'}  position={'absolute'}
                    bottom={4}
                    fontSize={{base:10,md:13}}
                    color={'#212121'}
                    rounded={10}
                     right={5} bg={'#F4F4F4'}>
                     <BiTrash size={10}/>
                     Remove List
                  </Button>
                </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

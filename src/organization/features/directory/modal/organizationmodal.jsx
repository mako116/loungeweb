import {
  Dialog,
  Portal,
  Fieldset,
  Button,
  HStack,
  Image,
  Text,
  Avatar,
  Stack,
  List,
  Box,
  Card,
  Heading,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

export const OrganizationModal = ({ isOpen, onClose, selected }) => {
  if (!selected) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            rounded={30}
            bg="#FAFAFA"
            p={2}
            maxW={{ base: "sm" }}
          >
            <Fieldset.Root size={{ base: "sm", md: "lg" }} >
              <Fieldset.Content alignItems="center" justifyContent="center">
                 <Box
                  bg={"#FAFAFA"}
                  h={"100%"}
                   p={3}
                  className="pb={4}"
                  >
                 <Card.Root
                  bg={"#fff"}
                  shadowColor={"#080F340F"}
                  shadow={"sm"}
                  rounded={20}
                  border={"1px solid #fff"}
                  >
                 <Card.Body gap="2">
                  <Avatar.Root mx={"auto"} boxSize={20} rounded={50}>
                  <Avatar.Image src={selected.avatar} />
                  <Avatar.Fallback name={selected.name} />
                 </Avatar.Root>
                  <Card.Title
                    mt="2"
                    textAlign={"center"}
                    fontFamily="InterBold"
                    >
                    {selected.name}
                    </Card.Title>
                    <Card.Description textAlign={"center"}>
                     <HStack justifyContent={"center"} mb={-1} alignItems={"center"}>
                        <Image boxSize={5} src={selected.companyLogo} alt="company" />
                            <Text
                                color={"#7C7C7C"}
                                   fontSize={{ base: 10, md: 12 }}
                                   fontFamily="InterRegular"
                                 >
                                   {selected.company}
                                 </Text>
                               </HStack>
                               <HStack justifyContent={"center"} mt={2} alignItems={"center"}>
                                 <FaLocationDot
                                   style={{ fontSize: "12px" }}
                                   color={"#7C7C7C"}
                                 />
                                 <Text
                                   color={"#7C7C7C"}
                                   fontSize={{ base: 10, md: 12 }}
                                   fontFamily="InterRegular"
                                 >
                                   {selected.location}
                                 </Text>
                               </HStack>
                             </Card.Description>
                           </Card.Body>
                           <Card.Footer>
                             <Button
                             onClick={onClose}
                               w={"full"}
                               fontFamily="InterRegular"
                               fontSize={12}
                               rounded={20}
                               p={6}
                             >
                               Contact Now
                             </Button>
                           </Card.Footer>
                         </Card.Root>
                 
                         {/* BIO */}
                         <Card.Root size="sm" px={5} rounded={20} mt={4}>
                           <Card.Header>
                             <Heading size="md" fontFamily="InterRegular" fontSize={12}>
                               Bio
                             </Heading>
                           </Card.Header>
                           <Card.Body mt={-3} color="fg.muted">
                             <List.Root fontFamily="InterRegular" fontSize={12}>
                               {selected.bio.map((item, idx) => (
                                 <List.Item key={idx}>{item}</List.Item>
                               ))}
                             </List.Root>
                           </Card.Body>
                         </Card.Root>
                 
                         {/* EXPERIENCE */}
                         <Card.Root
                           px={5}
                           fontFamily="InterRegular"
                           fontSize={12}
                           size="sm"
                           rounded={20}
                           mt={4}
                         >
                           <Card.Header>
                             <Heading size="md">Experience & Role</Heading>
                           </Card.Header>
                           <Card.Body mt={-2} color="fg.muted">
                             <List.Root>
                               {selected.expRole.map((item, idx) => (
                                 <List.Item key={idx}>{item}</List.Item>
                               ))}
                             </List.Root>
                           </Card.Body>
                         </Card.Root>
                 
                         {/* SOCIALS */}
                         <Card.Root size="sm" px={2} rounded={20} mt={4}>
                           <Card.Header>
                         <Heading size="md">Connect on Socials</Heading>
                      </Card.Header>
                       <Card.Body flexDirection={"row"} gap={4} color="fg.muted">
                       {selected.socials.map((src, idx) => (
                     <Image key={idx} src={src} boxSize={5} />
                     ))}
                  </Card.Body>
                </Card.Root>
              </Box>
            </Fieldset.Content>
            </Fieldset.Root>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

import {
  Dialog,
  Portal,
  CloseButton,
  Stack,
  HStack,
  Image,
  Text,
  Button,
  Heading,
  Input,
  FileUpload,
  Textarea,
} from "@chakra-ui/react";
import { CgAttachment } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";

export const EditProgram = ({ isOpen, onClose }) => {
  
 
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
              <Heading>
                Edit Program
              </Heading>
              <Text>
                Title
              </Text>
              <Input type="text" />
              <Text>
                Brief Description
              </Text>
              <Textarea 
              border={'1px solid #D3D4D7'}
              minH={200}   fontSize={13} autoresize variant="subtle" placeholder="Write your post or question here" />
               <Text color={'#667185'} fontSize={10}>
                0/100 words
               </Text>
                   <HStack  w={'100%'}>
                     <Button 
                     onClick={()=>onClose()}
                           py={6} 
                               px={{base:5,md:50}}
                                // w={{base:'35%'}}
                                 bg={'#fff'} color={'#2B362F'} border={"1px solid #2B362F"} >
                                Cancel
                             </Button>
                           <Button
                        //   onClick={onFinish}
                          py={6}
                         flex={1}
                        // w={{ base: "100%" }}
                         rounded={5}
                         bg={"#2B362F"}
                        color="white"
                       >
                      Save Changes 
                    </Button>
                 </HStack>
            </Stack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
 
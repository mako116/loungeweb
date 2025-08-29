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

export const CreateArticle = ({ isOpen, onClose }) => {
  
 
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
                Create Article
              </Heading>
              <Text>
                Title
              </Text>
              <Input type="text" />
              <Textarea h={100} pb={300} fontSize={13} autoresize variant="subtle" placeholder="Write your post or question here" />
               <HStack  
                maxW={200}
                justifyContent={'flex-start'}
               >
               <FileUpload.Root>
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild>
                     <Button variant="outline" size="sm">
                    <CiImageOn /> Add media
                    </Button>
                     </FileUpload.Trigger>
                   <FileUpload.List />
                   </FileUpload.Root>
                   {/* add Link */}

                    <Button
                        my={4}
                        bg={'#EFF2FC'} 
                        color={'#292D32'} 
                        rounded={20} 
                        fontSize={11} 
                        mr={'auto'}>
                        <CgAttachment />
                              Add Link        
                        </Button>
                </HStack>
              <Button rounded={20}>
                Post <PiTelegramLogoLight/>
              </Button>
            </Stack>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

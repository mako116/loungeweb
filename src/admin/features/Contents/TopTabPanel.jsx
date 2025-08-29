import { Tabs, Box, Heading, IconButton, Button } from "@chakra-ui/react"
import { LuCircleAlert, LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
 import { MdAttachFile, MdStars } from "react-icons/md"
import { AdminProgram } from "./Program"
import { AdminLinks } from "./Links"
import { IoIosArrowBack } from "react-icons/io"
import { AdminArticles } from "./Articles"
import { RiCalendarEventFill } from "react-icons/ri"
import { CiCirclePlus } from "react-icons/ci"
import { CreateArticle } from "./Modal/CreateContent"
import { useState } from "react"
import { FaRegCalendar } from "react-icons/fa"

export const AdminContent = () => {

    const [isOpened, setIsOpened] = useState(false);
  
  
      const handleAction = () => {
       setIsOpened(true);
    };
  
    const handleClosed = () => {
      setIsOpened(false);
     };

  return (
    <Box 
    //  h={"100vh"}
        // bg={"#F5F6FA"}
       
    >
    <Box w={'100%'} h={'100%'} bg={'#F5F6FA'}>
     
    <Tabs.Root 
      defaultValue="articles"
      variant="#000"
      bg={'#F5F6FA'}
       rounded={20}
    >
      <Tabs.List 
        bg={'#F5F6FA'}
        border={'none'}
        gap={2}
        mx={5}
        rounded={20}
        p="13"
      >
        <Tabs.Trigger 
          value="articles" 
          color={'#9E9E9E'}
          bg={'transparent'}
          
           p={{base:2,md:6}}
           fontSize={{base:10,md:14}}
          rounded={5}
          border={'1px solid #EBEBEE'}
          _selected={{ border:"1px solid #2B362F", color: "#2B362F" }}
        >
          <LuCircleAlert />
          Informations
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="projects"
          color={'#9E9E9E'}
          bg={'transparent'}
           p={{base:2,md:6}}
           fontSize={{base:10,md:14}}
          rounded={5}
           border={'1px solid #EBEBEE'}
          _selected={{ border:"1px solid #2B362F", color: "#2B362F" }}

        >
         <MdStars />
          Program
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="tasks"
          color={'#9E9E9E'}
          bg={'transparent'}
          p={{base:2,md:6}}
          fontSize={{base:10,md:14}}
          rounded={5}
          border={'1px solid #EBEBEE'}
          _selected={{ border:"1px solid #2B362F", color: "#2B362F" }}

        >
          <MdAttachFile  />
          Links
        </Tabs.Trigger>

         <Tabs.Trigger 
          value="events"
          color={'#9E9E9E'}
          bg={'transparent'}
          p={{base:2,md:6}}
          fontSize={{base:10,md:14}}
          rounded={5}
           border={'1px solid #EBEBEE'}
          _selected={{ border:"1px solid #2B362F", color: "#2B362F" }}

        >
          <RiCalendarEventFill  />
          Events
        </Tabs.Trigger>
        <Button
          bg={'transparent'}
           border={'1px solid #E4E4E4'}
           p={5}
          color={'#212121'}         
           onClick={() => handleAction()} 
        >
          <CiCirclePlus />
          Create
        </Button>

         <Box  
         flex={1}
         ml={'auto'}
         justifyContent={'flex-end'}
         >
          <Button
         
         zIndex={1000}
          bg={'transparent'}
           border={'1px solid #E4E4E4'}
           p={5}
          color={'#212121'}         
         
        >
          <FaRegCalendar />
          This Month
        </Button>
         </Box>
        <Tabs.Indicator rounded="l2" />
      </Tabs.List>

      <Tabs.Content value="articles">
        <AdminArticles/>
      </Tabs.Content>
      <Tabs.Content value="projects">
        <AdminProgram/>
      </Tabs.Content>
      <Tabs.Content value="tasks">
         <AdminLinks/>
      </Tabs.Content>
    </Tabs.Root>
     </Box>

      <CreateArticle
        isOpen={isOpened}
        onClose={handleClosed}
      />
      </Box>
  )
}

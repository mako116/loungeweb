import {Button, Flex, HStack, Tabs, Text } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import { Members } from "./MentorApplication";
import { Organization } from "./NewOrganization";
import { FaUserPlus } from "react-icons/fa";

export const DashboardTabpanel = () => {
 
  return (
    <Tabs.Root bg="#F5F6FA" defaultValue="Members">
      <Flex alignItems={'center'} pt={{base:1,md:5}} justifyContent={"space-between"}>
        {/* Tabs */}
        <Tabs.List whiteSpace={'nowrap'}>
          <Tabs.Trigger
          _selected={{color:'#2B362F'}}
          fontSize={{base:10,md:13}}
          color={'#999999'}
          value="Members">
            Members
          </Tabs.Trigger>
          
          <Tabs.Trigger 
           _selected={{color:'#2B362F'}}
          color={'#999999'}
          fontSize={{base:10,md:13}}
          value="Organization">
             Organization
          </Tabs.Trigger>
         
        </Tabs.List>
          <Button
              size="sm"
              border={`1px solid #333`}
              rounded={20}
              color={"#333"}
              bg="#fff"
              _hover={{ bg: "#f0f0f0" }}
            >
              <HStack spacing={2}>
                <FaUserPlus size={12} />
                <Text
                  fontSize={{base:10,md:13}}
                  fontWeight="400"
                  fontFamily="OutfitRegular"
                >
                  Add New User
                </Text>
              </HStack>
            </Button>
          
      </Flex>

      {/* Tab Contents */}
      <Tabs.Content value="Members">
        <Members />
      </Tabs.Content>
      <Tabs.Content value="Organization">
        <Organization />
      </Tabs.Content>
    </Tabs.Root>
  );
};

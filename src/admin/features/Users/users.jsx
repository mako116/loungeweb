import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { DashboardTabpanel } from "./TabPanel";

import { useState } from "react";

export const UsersHome = () => {

  
  return (
    <Box h="100vh" bg="#F5F6FA" px={6}>
       

      {/* <DashboardCard/> */}
      <DashboardTabpanel/>
    </Box>
  );
};

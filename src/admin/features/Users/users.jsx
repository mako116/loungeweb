import { Box } from "@chakra-ui/react";
import { DashboardTabpanel } from "./TabPanel";

export const UsersHome = () => {
  
  
  return (
    <Box h="100vh" bg="#F5F6FA" px={6}>
      {/* <DashboardCard/> */}
      <DashboardTabpanel/>
    </Box>
  );
};

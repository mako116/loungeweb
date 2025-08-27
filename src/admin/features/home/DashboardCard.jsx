import {Grid, HStack  } from "@chakra-ui/react";
import logo from "../../../assets/Icon.png";
 
import { ReusableCard } from "../../components/Card/ReusableCard";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

export function DashboardCard() {
  return (
    <Grid templateColumns={{base:"repeat(1, 1fr)",
    md:"repeat(2, 1fr)",
    lg:"repeat(3, 1fr)",
    xl:"repeat(4, 1fr)"}} gap="2">
    <ReusableCard
    title={'Total users'}
     description={'40,689'}
     image={logo}
     rate={'8.5%'}
     current={'up'}
     color={'#00B69B'}
     arrows={<IoIosTrendingUp />}
     timestamp={'yesterday'}
    />
    <ReusableCard
    title={'Total users'}
     description={'40,689'}
     image={logo}
     rate={'8.5%'}
      color={'#00B69B'}
    arrows={<IoIosTrendingUp />}
     current={'up'}
     timestamp={'yesterday'}
    />
    <ReusableCard
    title={'Total users'}
     description={'40,689'}
      color={'#00B69B'}
    arrows={<IoIosTrendingDown />}
     image={logo}
     rate={'8.5%'}
     current={'down'}
     timestamp={'yesterday'}
    />
    <ReusableCard
    title={'Total users'}
     description={'40,689'}
     image={logo}
     rate={'8.5%'}
     current={'up'}
     timestamp={'yesterday'}
    />
   </Grid>
  );
}

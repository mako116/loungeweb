import { Flex } from '@chakra-ui/react'
import { Banner } from './leftSections/Banner'
import { Card } from './RightSide/Card'

export const Homes = () => {
  return (
     <Flex w="100%" p={6} gap={6} flexDir={{ base: "column", lg: "row" }}>
      <Banner />
      <Card />
    </Flex>
  )
}

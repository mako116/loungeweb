"use client"

import { Flex, Portal, Select, createListCollection } from "@chakra-ui/react"
import { MdBusinessCenter } from "react-icons/md"
import { frameworks } from "../../features/Users/users"
 
export const Dropdown = ({icon}) => {
  return (
    <Select.Root  collection={frameworks} size="xs" width="140px">
      <Select.HiddenSelect />
       <Select.Control  py={2} rounded={12} bg={'transparent'} border={'1px solid #CCCCCCCC'} >
        <Select.Trigger border={'none'} outline={'none'}>
          <Flex gap={2}>
            {icon && <MdBusinessCenter/>}
            <Select.ValueText   fontWeight={'medium'} color={'#9E9E9E'} placeholder="Select " />
        </Flex>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner >
          <Select.Content >
            {frameworks.items.map((framework) => (
              <Select.Item  item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}



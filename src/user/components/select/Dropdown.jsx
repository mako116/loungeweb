"use client"

import { Flex, Portal, Select, createListCollection } from "@chakra-ui/react"
import { MdAccountCircle, MdBusinessCenter } from "react-icons/md"
 
export const Dropdown = ({icon,icons,frameworks}) => {
  return (
    <Select.Root  collection={frameworks} size="xs" width="140px">
      <Select.HiddenSelect />
       <Select.Control  py={3} rounded={12} border={'1px solid #EBEBEB'} >
        <Select.Trigger border={'none'} outline={'none'}>
         <Flex gap={2}>
          {icon && <MdBusinessCenter/>}
          {icons && <MdAccountCircle/>}
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



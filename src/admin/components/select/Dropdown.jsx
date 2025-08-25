"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

export const Dropdown = () => {
  return (
    <Select.Root  collection={frameworks} size="xs" width="140px">
      <Select.HiddenSelect />
       <Select.Control  py={3} rounded={12} bg={'#EBEBEB'} >
        <Select.Trigger border={'none'} outline={'none'}>
          <Select.ValueText   fontWeight={'medium'} color={'#9E9E9E'} placeholder="Select " />
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

const frameworks = createListCollection({
  items: [
    { label: "finance", value: "finance" },
    { label: "finances", value: "finances" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

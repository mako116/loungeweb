"use client"

import {
  Button,
  Popover,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react"
import { FaBriefcase } from "react-icons/fa"
import { PiUserCircleFill } from "react-icons/pi";

export const SelectOption = ({ title, placeholder, showCase, showUser }) => {
  return (
    <Popover.Root>
      <Popover.Trigger px={7} py={25} asChild>
        <Button variant="outline"  borderRadius={10} fontSize={10} size="md" gap={2}>
          {showCase && <FaBriefcase   />} 
          {showUser && <PiUserCircleFill />} 
          {title}
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>{title}</Popover.Header>
            <Popover.Body>
              <Select.Root
                collection={frameworks}
                size="sm"
                positioning={{ sameWidth: true, placement: "bottom" }}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder={placeholder} />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content width="full">
                    {frameworks.items.map((item) => (
                      <Select.Item item={item} key={item.value}>
                        {item.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

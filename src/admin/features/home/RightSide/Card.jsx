import { Box, Heading,  HStack, Image, Text, Button } from "@chakra-ui/react";

export function Card() {
  return (
    <Box
      flex="1"
      bg="white"
      p={6}
      borderRadius="2xl"
      shadow="md"
      border="1px solid"
      borderColor="gray.200"
    >
      {/* Card Title */}
      <Heading fontSize="xl" mb={2}>
        Latest Update
      </Heading>
      {/* <Divider borderColor="gray.300" mb={4} /> */}

      {/* Image + text section */}
      <HStack spacing={4} mb={4} align="flex-start">
        <Image
          src="https://via.placeholder.com/80"
          alt="Update"
          boxSize="80px"
          borderRadius="md"
          objectFit="cover"
        />
        <Text fontSize="sm" color="gray.700">
          Stay informed with the latest updates and insights curated just for
          you. Explore new features, tools, and tips that will help you make the
          most out of your journey with us.
        </Text>
      </HStack>

      {/* <Divider borderColor="gray.300" mb={4} /> */}

      {/* Footer button */}
      <Button w="full" colorScheme="blue" size="md" rounded="lg" shadow="sm">
        Learn More
      </Button>
    </Box>
  );
}

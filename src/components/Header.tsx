import { Box, HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <HStack
        px={"20"}
        py={"5"}
        justifyContent={"space-between"}
        borderBottomWidth={1}
        borderBottomColor={"blackAlpha.200"}
      >
        <Box w="70px" h="10" bg="red.500" />

        <Box w="400px" h="10" bg="red.500" />

        <Box w="180px" h="10" bg="red.500" />
      </HStack>
    </Box>
  );
}

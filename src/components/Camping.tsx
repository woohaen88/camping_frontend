import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ICamping {
  id: number;
}

export default function Camping({ id }: ICamping) {
  return (
    <VStack mb="3">
      <Link to={"campgrounds/1"}>
        <Box maxW="282" w="282" h="268" bg="blue.500" rounded={"xl"}>
          place holder ddddddddddddddddddddddddddd
        </Box>
      </Link>
      <VStack
        px={{ md: "1.5", lg: "8" }}
        alignSelf={"flex-start"}
        spacing={"1"}
      >
        <HStack alignSelf={"flex-start"}>
          <Text>여기에 캠핑장이름 ㅋㅋ</Text>
          <Text>4.86</Text>
        </HStack>
        <VStack spacing={"-0.5"} alignSelf={"flex-start"}>
          <Box color={"gray.500"}>
            <Text fontSize={"sm"}>산 및 정원 전망</Text>
            <Text fontSize={"sm"}>11월 4일 ~ 9일</Text>
          </Box>
        </VStack>
        <HStack alignSelf={"flex-start"}>
          <Text as={"b"}>\173,459</Text>
          <Text>/ 박</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg={"gray.100"} minH={"100vh"} justifyContent={"center"}>
      <Heading>Page not found.</Heading>
      <Text>It seems that you're lost.</Text>
      <Link to={"/"}>
        <Button colorScheme="blue" variant={"link"}>
          Go Home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}

import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function Header() {
  const {
    isOpen: LoginIsOpen,
    onClose: LoginOnClose,
    onOpen: LoginOnOpen,
  } = useDisclosure();
  const {
    isOpen: SignUpIsOpen,
    onClose: SignUpOnClose,
    onOpen: SignUpOnOpen,
  } = useDisclosure();
  return (
    <HStack
      py={5}
      px={10}
      borderBottomWidth={1}
      justifyContent={"space-between"}
    >
      <Link to="/">
        <Box color={"blue.700"} fontSize={"28"}>
          <Text colorScheme="blue">Camping</Text>
        </Box>
      </Link>
      <HStack>
        <Button onClick={LoginOnOpen}>Log in</Button>
        <Button onClick={SignUpOnOpen}>Sign up</Button>
      </HStack>
      <LoginModal isOpen={LoginIsOpen} onClose={LoginOnClose} />
      <SignupModal isOpen={SignUpIsOpen} onClose={SignUpOnClose} />
    </HStack>
  );
}

import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { userIsLoading, user, userIsLoggedIn } = useUser();
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
  const queryClient = useQueryClient();
  const toast = useToast();

  const onLogOut = async () => {
    const toastId = toast({
      title: "LogOut...",
      description: "Sad to see you go",
      status: "loading",
      position: "bottom-right",
    });
    await logOut();

    queryClient.refetchQueries(["me"]);
    toast.update(toastId, {
      status: "success",
      title: "Done!!",
      description: "see you later",
    });
  };
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
        {!userIsLoading ? (
          !userIsLoggedIn ? (
            <>
              <Button onClick={LoginOnOpen}>Log in</Button>
              <Button onClick={SignUpOnOpen}>Sign up</Button>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user.username} src={user.avatar} />
              </MenuButton>
              <MenuList>
                <Link to="/camping/upload/">
                  <MenuItem>Post</MenuItem>
                </Link>
                <MenuItem onClick={onLogOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={LoginIsOpen} onClose={LoginOnClose} />
      <SignupModal isOpen={SignUpIsOpen} onClose={SignUpOnClose} />
    </HStack>
  );
}

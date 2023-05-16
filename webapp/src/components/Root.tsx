import { Box, Button, HStack, useDisclosure, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import LoginModal from "./LoginModal";
import Header from "./Header";

export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

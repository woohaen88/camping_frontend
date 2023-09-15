import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

import {
  Avatar,
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        px={"20"}
        py={"5"}
        justifyContent={"space-between"}
        borderBottomWidth={1.5}
        borderBottomColor={"blackAlpha.200"}
      >
        <Link to="/">
          <Text as={"b"} fontSize={"2xl"}>
            Camping
          </Text>
        </Link>

        <InputGroup w={"sm"} colorScheme="green">
          <Input type="text" placeholder="검색시작하기" />
          <InputRightAddon children={<FaSearch />} />
        </InputGroup>

        <HStack>
          <Avatar name="양" size={"md"} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaBars />}
              variant="outline"
            />
            <MenuList>
              <Link to="api/v1/users/signin">
                <MenuItem>Sign In</MenuItem>
              </Link>
              <Link to="/api/v1/users/signup">
                <MenuItem>Sign Up</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </Stack>
    </Box>
  );
}

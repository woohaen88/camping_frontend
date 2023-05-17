import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar, FaWonSign } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IPhoto {
  id: string;
  owner: number;
  file: string;
  description: string;
}

interface IOwner {
  id: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
}

interface ICampGroundSchema {
  id: number;

  address: string;
  price: number;
  owner: IOwner;

  imageURL: string;
  ratings: number;

  check_in: string;
  check_out: string;
}

export default function CampGround({
  id,
  imageURL,
  address,
  ratings,
  owner,
  check_in,
  check_out,
  price,
}: ICampGroundSchema) {
  return (
    <Link to={`/camping/${id}/`}>
      <VStack key={id} alignItems={"flex-start"}>
        <Box rounded={"2xl"} overflow={"hidden"} w={"100%"} minH={"180px"}>
          <Image src={imageURL} w="100%" objectFit={"cover"} minH={"180px"} />
        </Box>
        <Box w={"100%"} px={"3"}>
          <HStack justifyContent={"space-between"}>
            <Text as={"b"}>{address}</Text>
            <HStack>
              <FaStar size={"0.8rem"} />
              <Text>{ratings}</Text>
            </HStack>
          </HStack>

          <Text fontSize={"md"}>{owner.username}</Text>
          <Text fontSize={"0.9rem"}>
            최근방문일시: {check_in} ~ {check_out}
          </Text>
        </Box>
        <Text px={3}>
          <HStack spacing={"1"}>
            <FaWonSign />
            <Text as={"b"}>{price.toLocaleString()}</Text>
            <Text>/night</Text>
          </HStack>
        </Text>
      </VStack>
    </Link>
  );
}

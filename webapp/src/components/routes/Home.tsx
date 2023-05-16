import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { getCampGrounds } from "../../api";

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
  id: string;
  name: string;
  address: string;
  price: number;
  owner: IOwner;
  tags: number[];
  photos: IPhoto[];
  ratings: number;
  pet_friendly: boolean;
  ev_friendly: boolean;
  check_in: string;
  check_out: string;
}

export default function Home() {
  const { isLoading, data } = useQuery<ICampGroundSchema[]>(
    ["campgrounds"],
    getCampGrounds
  );
  return (
    <Grid
      mt={10}
      px={10}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr", // 480px
        md: "1fr, 1fr", // 768px
        lg: "repeat(3, 1fr)", // 992px
        xl: "repeat(4, 1fr)", // 1280px
        "2xl": "repeat(5, 1fr)", // 1536px
      }}
    >
      {data?.map((campground) => {
        return (
          <VStack key={campground.id} alignItems={"flex-start"}>
            <Box rounded={"2xl"} overflow={"hidden"}>
              <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720" />
            </Box>
            <VStack alignItems={"flex-start"} spacing={-0.5}>
              <Grid templateColumns={"6fr 1fr"}>
                <Text as={"b"}>{campground.address}</Text>
                <HStack>
                  <FaStar size={"0.8rem"} />
                  <Text>{campground.ratings}</Text>
                </HStack>
              </Grid>

              <Text fontSize={"md"}>{campground.owner.username}: username</Text>
              <Text fontSize={"0.9rem"}>
                최근방문일시: {campground.check_in} ~ {campground.check_out}
              </Text>
            </VStack>

            <Text>
              <Text as={"b"}>{campground.price}</Text>/night
            </Text>
          </VStack>
        );
      })}
    </Grid>
  );
}

import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaStar, FaWonSign } from "react-icons/fa";
import { getCampGrounds } from "../../api";
import { Link } from "react-router-dom";
import CampGround from "../CampGround";

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
      w={"100%"}
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
          <CampGround
            key={campground.id}
            id={campground.id}
            imageURL={campground.photos[0].file}
            address={campground.address}
            ratings={campground.ratings}
            owner={campground.owner}
            check_in={campground.check_in}
            check_out={campground.check_out}
            price={campground.price}
          />
        );
      })}
    </Grid>
  );
}

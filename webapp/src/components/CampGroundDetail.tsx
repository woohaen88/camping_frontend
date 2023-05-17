import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getCampGround } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ICampGroundDetail } from "../types";
import { FaWonSign } from "react-icons/fa";

export default function CampGroundDetail() {
  const { campGroundId } = useParams();
  const { isLoading, data } = useQuery<ICampGroundDetail>(
    ["detail", campGroundId],
    getCampGround
  );
  return (
    <Box mt={4} px={8}>
      <Grid
        rounded={"xl"}
        overflow={"hidden"}
        rowGap={1}
        columnGap={1}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 4fr)"}
        h={{
          md: "30vh",
          lg: "40vh",
        }}
      >
        {data?.photos.slice(0, 5).map((image, index) => {
          return (
            <GridItem
              colSpan={index === 0 ? 2 : 1}
              rowSpan={index === 0 ? 2 : 1}
              overflow={"hidden"}
              key={image.id}
            >
              <Image
                objectFit={"cover"}
                w={"100%"}
                h={"100%"}
                src={image.file}
              />
            </GridItem>
          );
        })}
      </Grid>

      <HStack mt={8} mb={8}>
        <Heading fontSize={"3xl"}>{data?.owner.username}님의 캠핑 기록</Heading>
      </HStack>
      <Card>
        <CardHeader>
          <Heading size="md">CampGround Info</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Name
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.name}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                address
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.address}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                description
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                price
              </Heading>

              <HStack>
                <Text pt="2" fontSize="sm">
                  ￦ {data?.price.toLocaleString()}
                </Text>
              </HStack>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Visit Date
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.check_in} ~ {data?.check_out}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Pet friendly
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.pet_friendly ? (
                  <Text>반려동물 가능합니다</Text>
                ) : (
                  <Text>아쉽지만 이 캠핑장은 반려동물을 이용할 수 없어요</Text>
                )}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                EV Friendly
              </Heading>
              <Text pt="2" fontSize="sm">
                {data?.ev_friendly ? (
                  <Text>충전이 가능해요!</Text>
                ) : (
                  <Text>아쉽지만 충전이 불가능합니다.</Text>
                )}
              </Text>
            </Box>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tags
              </Heading>
              {data?.tags.map((tag) => {
                return (
                  <Text pt="2" fontSize="sm">
                    {tag.name}
                  </Text>
                );
              })}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

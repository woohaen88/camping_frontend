import {
  Avatar,
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { campgroundId } = useParams();
  console.log(campgroundId);
  return (
    <Box px={20} py={5}>
      <Box alignItems={"flex-start"}>
        <Text fontSize={"2xl"} as={"b"}>
          남산타워를 조망하며 누리는 휴식
        </Text>
        <HStack justify={"space-between"} mt={2}>
          <Text>4.86 · 후기 14개 · 서울, 한국</Text>
          <Text>
            가격:{" "}
            <Text mx={"5"} as="b" fontSize={"lg"}>
              60000원
            </Text>
          </Text>
        </HStack>
      </Box>
      {/* image URL 5개가 있음 */}

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
        rounded={"xl"}
        overflow={"hidden"}
        height={"30vh"}
        mt={8}
      >
        {[
          "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/ff037c2c-2d78-4625-a8e7-34efbf241544.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/d2cb9e14-50e5-481a-87d0-23b72bb0964b.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/1196af9d-0146-47e7-95b6-8e8e9c7116b9.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/490e3dc9-06e6-47a4-8f89-b7f7f34d44d6.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-926638381418918258/original/2250f1b2-9dd3-4fc6-87d6-e06d8ebd7ce5.jpeg?im_w=720",
        ].map((value, i) => {
          return (
            <>
              <GridItem
                rowSpan={i === 0 ? 2 : 1}
                colSpan={i === 0 ? 2 : 1}
                bg={"blue.500"}
              />
            </>
          );
        })}
      </Grid>
      <VStack alignItems={"flex-start"} mt={5}>
        <Text fontSize={"2xl"} as={"b"}>
          내용
        </Text>
        <Text as="p" fontSize={"sm"}>
          강원도 설악산오색약수터 밑에 위치한 옥색계곡을 끼고 있는 캠핑장입니다.
          계곡물이 너무나 맑고 수온도 미지근하여 찾는 이에게 안정과 휴식을
          제공해줍니다. 이곳에는 아직도 수도권에선 찾아보기 힘든 사슴벌레,
          반딧불이등이 나오고 , 계곡에선 꺽지,메기, 다슬기등이 나와서 진정
          캠핑이 자연과 동화되는 것임을 알려주고 있습니다. 전사이트가 오래된
          밤나무 그늘에 위치하는 아름다운 캠핑장... 이곳에서 설악산 10분,
          낙산해수욕장 20분..바다와산이 가깝습니다. 캠핑이란 자연과 한몸이 되는
          것임을 깨닫게 해주는 자연이 살아있는 캠핑장입니다
        </Text>
      </VStack>
      <VStack mt={10} alignItems={"flex-start"}>
        <Text as="b" fontSize={"2xl"}>
          Ooze 님이 호스팅하는 공동 주택 전체
        </Text>
        <Text color={"gray.600"}>
          최대 인원 4명 · 전기차
          <Text as={"b"}>충전</Text>
          가능 · 침대 2개욕실 1개
        </Text>
        <Divider borderBottomWidth={2} mt={3} />
      </VStack>
      <VStack alignItems={"flex-start"}>
        <Text fontSize={"2xl"} as={"b"} mt={3}>
          운영정책
        </Text>
        <HStack>
          <Text>매너타임 &rarr;</Text>
          <Text>시작 23:00 | 종료 08:00</Text>
        </HStack>
        <HStack>
          <Text>오토캠핑 &rarr;</Text>
          <Text>입실 13:00 | 퇴실 12:00</Text>
        </HStack>
      </VStack>
      <Divider borderBottomWidth={2} mt={3} />
      <VStack alignItems={"flex-start"}>
        <Text fontSize={"2xl"} as={"b"} mt={3}>
          시설/환경
        </Text>
        <HStack>
          {[
            "화장실",
            "샤워실",
            "개수대",
            "와이파이",
            "매점",
            "카페",
            "장비대여",
            "수영장",
            "키즈존",
          ].map((value, i) => {
            return (
              <>
                <Tag size="md" colorScheme="green">
                  {value}
                </Tag>
              </>
            );
          })}
        </HStack>
        <Divider borderBottomWidth={2} mt={3} />
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"2xl"} as={"b"} mt={3}>
            댓글
          </Text>
          <Grid templateColumns={"1fr 1fr"} gap={3}>
            {[1, 2, 3, 4].map((value, index) => {
              return (
                <>
                  <VStack alignItems={"flex-start"} mt={3} mb={3} px={4}>
                    <HStack>
                      <Avatar name="A" />
                      <VStack alignItems={"flex-start"}>
                        <Text as={"b"}>서영</Text>
                        <Text color={"gray.500"} fontSize={"small"}>
                          2023년 9월(댓글생성일자)
                        </Text>
                      </VStack>
                    </HStack>
                    <Text mt={1} fontSize={"sm"}>
                      2023년 9월 서영 일단 뷰가 너무 예쁘고 내부도 뷰에 걸맞게
                      깔끔하게 꾸며져있어요 특별한 날 가기 좋습니다
                    </Text>
                  </VStack>
                </>
              );
            })}
          </Grid>
        </VStack>

        <VStack
          alignItems={"flex-start"}
          w={"100%"}
          maxH={"20vh"}
          overflow={"hidden"}
          objectFit="cover"
          minH={"50vh"}
        >
          <Text fontSize={"2xl"} as={"b"} mt={3}>
            캠핑장 위치
          </Text>
          <Image
            w={"100%"}
            src="https://wimg.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1206310_16061899354442297.jpg"
          />
        </VStack>
      </VStack>
    </Box>
  );
}

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import ProtectedPage from "../ProtectedPage";
import { useForm } from "react-hook-form";
import { FaWonSign } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createCampGround, getTag } from "../../api";
import {
  ICampGroundDetail,
  ITag,
  IUploadCampGroundError,
  IUploadCampGroundSuccess,
  IUploadCampGroundVariables,
} from "../../types";
import { useNavigate } from "react-router-dom";

export default function UploadCampGround() {
  const { register, handleSubmit, watch } =
    useForm<IUploadCampGroundVariables>();
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoading: tagIsLoading, data: tagData } = useQuery<ITag[]>(
    ["getTag"],
    getTag
  );

  const mutation = useMutation(createCampGround, {
    onSuccess: (data: IUploadCampGroundSuccess) => {
      toast({
        title: "sucess!!!",
        status: "success",
        description: "성공",
        position: "bottom-right",
        isClosable: true,
      });
      navigate(`/camping/${data.id}`);
    },
  });

  const onSubmit = (data: IUploadCampGroundVariables) => {
    mutation.mutate(data);
  };

  return (
    <ProtectedPage>
      <Box>
        <Container>
          <Heading textAlign={"center"}>Upload CampGround</Heading>
          <VStack
            spacing={5}
            as={"form"}
            mt={5}
            mb={5}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* 캠핑장이름 시작  */}
            <FormControl isRequired>
              <FormLabel>캠핑장이름</FormLabel>
              <Input
                {...register("name", { required: "이 항목은 필수입니다." })}
                type="text"
              />
              <FormHelperText fontSize={"xs"}>
                캠핑장이름을 입력하세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장이름 끝  */}

            {/* 캠핑장주소 시작  */}
            <FormControl isRequired>
              <FormLabel>캠핑장 주소 입력해주세요</FormLabel>
              <Input
                {...register("address", { required: "이 항목은 필수입니다." })}
                type="text"
              />
              <FormHelperText fontSize={"xs"}>
                캠핑장주소를 입력하세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장주소 끝  */}

            {/* 캠핑장 설명 시작 */}
            <FormControl>
              <FormLabel>캠핑장설명</FormLabel>
              <Textarea {...register("description")} />
              <FormHelperText fontSize={"xs"}>
                캠핑장에대해서 간략하게 적어주세요.
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 설명 끝 */}

            {/* 캠핑장가격 시작  */}
            <FormControl isRequired>
              <FormLabel>캠핑장 가격</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaWonSign />} />

                <Input
                  {...register("price", { required: "이 항목은 필수입니다." })}
                  type="number"
                  min={0}
                />
              </InputGroup>
              <FormHelperText fontSize={"xs"}>
                하룻밤에 얼만인가요?
              </FormHelperText>
            </FormControl>
            {/* 캠핑장가격 끝  */}

            {/* 캠핑장사진 시작 (5장이상)  */}
            <FormControl isRequired>
              <FormLabel>사진등록</FormLabel>

              <Input
                className="form-control"
                {...register("files")}
                type="file"
                multiple
                accept="image/*"
              />

              <FormHelperText fontSize={"xs"}>
                최소 5장이상올려주세요.
              </FormHelperText>
            </FormControl>
            {/* 캠핑장사진 끝  */}

            {/* 캠핑장 체크인 시작 */}
            <FormControl isRequired>
              <FormLabel>캠핑장을 언제갔나요?</FormLabel>

              <Input
                {...register("check_in", { required: "이 항목은 필수입니다." })}
                type="date"
              />
              <FormHelperText fontSize={"xs"}>
                방문 시작일을 적어주세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 체크인 끝 */}

            {/* 캠핑장 체크아웃 시작 */}
            <FormControl isRequired>
              <FormLabel>얼마나 오래 있었나요??</FormLabel>
              <Input
                {...register("check_out", {
                  required: "이 항목은 필수입니다.",
                })}
                type="date"
              />
              <FormHelperText fontSize={"xs"}>
                방문종료일을 적어주세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 체크아웃 끝 */}

            {/* 캠핑장 평점 시작 */}
            <FormControl isRequired>
              <FormLabel>평점은 어느정도라 생각하세요?</FormLabel>
              <Input
                {...register("ratings", { required: "이 항목은 필수입니다." })}
                type="number"
                min={0}
                max={5}
              />
              <FormHelperText fontSize={"xs"}>
                평점을 적어주세요(정수만 가능)
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 평점 끝 */}

            {/* 캠핑장 반려동물 시작 */}

            <FormControl>
              <Checkbox {...register("pet_friendly")} type="checkbox">
                반려동물 가능한가요?
              </Checkbox>
              <FormHelperText fontSize={"xs"}>
                꼭 강아지가 아니여도됩니다.
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 반려동물 끝 */}

            {/* 캠핑장 전기차충전 시작 */}
            <FormControl>
              <Checkbox {...register("ev_friendly")} type="checkbox">
                전기차 충전이 가능한가요?
              </Checkbox>
              <FormHelperText fontSize={"xs"}>
                돈을 내도 괜찮아요. 가능 불가능인지만 표시해주세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 전기차충전 끝 */}
            {/* 태그 시작 */}

            <FormControl>
              <FormLabel>캠핑장 태그를 선택해주세요</FormLabel>
              <Grid templateColumns={"repeat(2, 1fr)"}>
                {tagData?.map((tag) => {
                  return (
                    <Checkbox
                      mt={2}
                      size={"sm"}
                      colorScheme="green"
                      key={tag.id}
                      {...register("tags")}
                      value={tag.id}
                    >
                      {tag.name}
                    </Checkbox>
                  );
                })}
              </Grid>
            </FormControl>
            {/* 태그 끝 */}
            {/* button  */}
            <Box w={"100%"}>
              <Button
                mt={4}
                mb={10}
                colorScheme="green"
                isLoading={mutation.isLoading}
                w={"100%"}
                type="submit"
              >
                등록
              </Button>
              {/* button  */}
            </Box>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}

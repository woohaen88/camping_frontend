import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import ProtectedPage from "../ProtectedPage";
import { useForm } from "react-hook-form";
import { FaWonSign } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { createCampGround } from "../../api";

export default function UploadCampGround() {
  const toast = useToast();

  const mutation = useMutation(createCampGround, {
    onSuccess: () => {
      toast({
        title: "sucess!!!",
        status: "success",
        description: "성공",
        position: "bottom-right",
        isClosable: true,
      });
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
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
            <FormControl>
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
            <FormControl>
              <FormLabel>캠핑장주소</FormLabel>
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
            <FormControl>
              <FormLabel>캠핑장가격</FormLabel>
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
            <FormControl>
              <FormLabel>캠핑장사진</FormLabel>
              <Input
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

            {/* 캠핑장태그 시작 */}

            {/* 캠핑장태그 끝 */}

            {/* 캠핑장 체크인 시작 */}
            <FormControl>
              <FormLabel>캠핑장을 언제 갔나요?</FormLabel>
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
            <FormControl>
              <FormLabel>캠핑장을 언제 갔나요?</FormLabel>
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
            <FormControl>
              <FormLabel>평점은 어느정도???</FormLabel>
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
              <FormLabel>반려동물 가능한가요?</FormLabel>
              <Checkbox {...register("pet_friendly")} type="checkbox" />
              <FormHelperText fontSize={"xs"}>
                꼭 강아지가 아니여도됩니다.
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 반려동물 끝 */}

            {/* 캠핑장 전기차충전 시작 */}
            <FormControl>
              <FormLabel>전기차 충전이 가능한가요?</FormLabel>
              <Checkbox {...register("ev_friendly")} type="checkbox" />
              <FormHelperText fontSize={"xs"}>
                돈을 내도 괜찮아요. 가능 불가능인지만 표시해주세요
              </FormHelperText>
            </FormControl>
            {/* 캠핑장 전기차충전 끝 */}
            {/* button  */}
            <Box w={"100%"} mb={5}>
              <Button isLoading={mutation.isLoading} w={"100%"} type="submit">
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

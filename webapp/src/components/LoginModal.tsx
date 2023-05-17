import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  IEmailLoginError,
  IEmailLoginSuccess,
  IEmailLoginVariables,
  emailLogin,
} from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginModal({ onClose, isOpen }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const queryClient = useQueryClient();

  // mutation generic => Success, error, variable
  const mutation = useMutation<
    IEmailLoginSuccess,
    IEmailLoginError,
    IEmailLoginVariables
  >(emailLogin, {
    onMutate: () => {
      console.log("muatation startring");
    },
    onSuccess: (data) => {
      console.log(data.message);
      console.log("mutation success");
      onClose();
      queryClient.refetchQueries(["me"]);
    },
    onError: (error) => {
      console.log("mutation error");
      console.log(error.detail);
    },
  });
  const onSubmit = ({ email, password }: ILoginForm) => {
    mutation.mutate({ email, password });
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack alignItems={"flex-start"}>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input
                isInvalid={Boolean(errors.email?.message)}
                {...register("email", { required: "please write a email" })}
                variant={"filled"}
                placeholder="E-mail"
              />
            </InputGroup>

            <Text fontSize={"sm"} color={"red.400"}>
              {errors.email?.message}
            </Text>

            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.400"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input
                {...register("password", {
                  required: "please write a password",
                })}
                variant={"filled"}
                placeholder="Password"
                type="password"
              />
            </InputGroup>
            <Text fontSize={"sm"} color={"red.400"}>
              {errors.password?.message}
            </Text>
          </VStack>
          <Button
            isLoading={mutation.isLoading}
            type="submit"
            mt={4}
            w={"100%"}
            colorScheme={"blue"}
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

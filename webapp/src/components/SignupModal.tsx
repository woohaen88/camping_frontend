import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ISignUpForm } from "../types";
import { createUser } from "../api";
import { useNavigate } from "react-router-dom";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ onClose, isOpen }: SignupModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpForm>();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(createUser, {
    onSuccess: () => {
      toast({
        title: "Message",
        description: "회원가입을 축하합니다.",
        status: "success",
        position: "bottom-right",
      });
      onClose();
      queryClient.refetchQueries(["me"]);

      navigate("/");
      reset();
    },
  });

  const onSubmit = (variables: ISignUpForm) => {
    mutation.mutate(variables);
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={"3"}>
            {/* email 시작 */}
            <FormControl isRequired isInvalid={mutation.isError}>
              <FormLabel fontSize={"sm"}>Email</FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.400"}>
                      <FaEnvelope />
                    </Box>
                  }
                />

                <Input
                  {...register("email")}
                  variant={"filled"}
                  placeholder="E-mail"
                />
              </InputGroup>
              {!mutation.isError ? null : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>

            {/* email 끝 */}

            {/* username 시작 */}
            <FormControl>
              <FormLabel fontSize={"sm"} textTransform={"uppercase"}>
                username
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.400"}>
                      <FaUserNinja />
                    </Box>
                  }
                />
                <Input
                  {...register("username")}
                  variant={"filled"}
                  placeholder="username"
                />
              </InputGroup>
            </FormControl>
            {/* username 끝 */}

            {/* password 시작 */}
            <FormControl isRequired>
              <FormLabel fontSize={"sm"} textTransform={"uppercase"}>
                password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.400"}>
                      <FaLock />
                    </Box>
                  }
                />
                <Input
                  {...register("password1")}
                  variant={"filled"}
                  placeholder="Password"
                  type="password"
                />
              </InputGroup>
              {!mutation.isError ? null : (
                <FormErrorMessage>password is required.</FormErrorMessage>
              )}
            </FormControl>
            {/* password 끝 */}

            {/* password2 시작 */}
            <FormControl isRequired>
              <FormLabel fontSize={"sm"} textTransform={"uppercase"}>
                Check Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Box color={"gray.400"}>
                      <FaLock />
                    </Box>
                  }
                />
                <Input
                  {...register("password2")}
                  variant={"filled"}
                  placeholder="Check Password"
                  type="password"
                />
              </InputGroup>
              {!mutation.isError ? null : (
                <FormErrorMessage>checkPassword is required.</FormErrorMessage>
              )}
            </FormControl>
            {/* password2 끝 */}
          </VStack>
          <Button
            isLoading={mutation.isLoading}
            mt={4}
            w={"100%"}
            colorScheme={"green"}
            type="submit"
          >
            Sign Up
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

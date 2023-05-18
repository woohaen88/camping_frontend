import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../api";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Heading, Spinner, Text, VStack, useToast } from "@chakra-ui/react";

export default function KakaoLogin() {
  let { search } = useLocation();
  let navigate = useNavigate();
  let queryClient = useQueryClient();
  let toast = useToast();

  let confirmLogin = async () => {
    let params = new URLSearchParams(search);
    let code = params.get("code");
    if (code) {
      let status = await kakaoLogin(code);
      if (status === 200) {
        toast({
          title: "message",
          description: "welome back!!!!",
          status: "success",
          position: "bottom-right",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} minH={"60vh"}>
      <Heading>processing log in ....</Heading>
      <Text>Don't go anywhere.</Text>
      <Spinner size={"lg"} />
    </VStack>
  );
}

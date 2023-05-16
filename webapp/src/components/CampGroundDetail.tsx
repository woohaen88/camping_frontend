import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getCampGround } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function CampGroundDetail() {
  const { campGroundId } = useParams();
  const { isLoading, data } = useQuery(["detail", campGroundId], getCampGround);
  return (
    <Box>
      Detail
      <h1>{campGroundId}</h1>
    </Box>
  );
}

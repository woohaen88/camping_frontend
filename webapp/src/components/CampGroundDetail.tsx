import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getCampGround } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ICampGroundDetail } from "../types";

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
    </Box>
  );
}

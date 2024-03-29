import { Box, Grid } from "@chakra-ui/react";
import Camping from "../components/Camping";
import { useQuery } from "@tanstack/react-query";
import { getCampgroundALL } from "../api";

export default function Home() {
  const { isLoading, data } = useQuery(["campgrounds"], getCampgroundALL);
  console.log("data");
  console.log(data);
  return (
    <Box px={20} py={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={6}
      >
        {[1, 21, 1, 1, 1, 2, 2, 2, 3, 1, 3].map((_, id) => {
          return <Camping id={id} key={id} />;
        })}
      </Grid>
    </Box>
  );
}

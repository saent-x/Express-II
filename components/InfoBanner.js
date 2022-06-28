import { Center, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";

const MotionBox = motion(Center)

const QUERY = gql`
  {
    informationBanner {
      info
    }
  }
`;

export default function InfoBanner() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  return (
    <MotionBox
      color="white"
      bg="gray"
      h="100px"
      marginTop="10px"
      w="100%"
      whileHover={{ scale: 1.025 }}
      padding="20px"
      cursor="pointer"
    >
      <Text fontSize={{ base: "18px", md: "2xl", lg: "2xl" }}>
        {data.informationBanner.info}
      </Text>
    </MotionBox>
  );
}

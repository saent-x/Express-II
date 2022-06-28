import Layout from "../components/Layout";
import { Center, Text, Stack, Box, Image } from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    howToPlay {
      Perming
      TwoSure
      Against
    }
  }
`;

export default function HowToPlay() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  return (
    <Layout>
      <Center w="100%" h="250px" backgroundImage="url('/pbg.png')">
        <Stack>
          <Center>
            <Text
              color="white"
              fontSize="5xl"
              fontWeight="bolder"
              borderLeftColor="white"
              borderLeftWidth="5px"
            >
              HOW TO PLAY
            </Text>
          </Center>
        </Stack>
      </Center>
      <br />
      <Stack>
        <Text w="fit-content" color="white" bg="gray" p="10px" fontSize="20px">
          PERMING
        </Text>

        <Box bg="white" p="30px" boxShadow="sm">
          <Text fontSize="20px">{data.howToPlay.Perming}</Text>
        </Box>
        <br />
        <Text w="fit-content" color="white" bg="gray" p="10px" fontSize="20px">
          2SURE
        </Text>
        <Box bg="white" p="30px" boxShadow="sm">
          <Text fontSize="20px">{data.howToPlay.TwoSure}</Text>
        </Box>
        <br />
        <Text w="fit-content" color="white" bg="gray" p="10px" fontSize="20px">
          AGAINST
        </Text>

        <Box bg="white" p="30px" boxShadow="sm">
          <Text fontSize="20px">{data.howToPlay.Against}</Text>
        </Box>
        <br />
      </Stack>
    </Layout>
  );
}

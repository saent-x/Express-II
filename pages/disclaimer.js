import Layout from "../components/Layout";
import { Center, Text, Stack, Box, Flex, Image } from "@chakra-ui/react";
import Markdown from "../components/Markdown";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    disclaimer {
      content
    }
  }
`;
export default function Disclaimer() {
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
              Disclaimer
            </Text>
          </Center>
        </Stack>
      </Center>
      <Flex bg="white" p="50px" boxShadow="sm" direction="column">
        <Markdown markdown={data.disclaimer.content} />
      </Flex>
    </Layout>
  );
}

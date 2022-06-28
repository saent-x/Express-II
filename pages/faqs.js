import Layout from "../components/Layout";
import { Center, Text, Stack, Box, Image } from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    faqs {
      question
      answer
    }
  }
`;

export default function FAQ() {
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
              FAQS
            </Text>
          </Center>
        </Stack>
      </Center>
      <br />
      {data.faqs.map((x, i) => (
        <Stack key={i}>
          <Text
            w="fit-content"
            color="white"
            bg="gray"
            p="10px"
            fontSize="20px"
          >
            {x.question}
          </Text>

          <Box bg="white" p="30px" boxShadow="sm">
            <Text fontSize="20px">{x.answer}</Text>
          </Box>
          <br />
        </Stack>
      ))}
    </Layout>
  );
}

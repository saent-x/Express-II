import {
  Flex,
  Image,
  Spacer,
  Center,
  Text,
  Stack,
  Divider,
  HStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import styles from "../styles/TimetableAndInfo.module.css";
import { useQuery, useMutation, useApolloClient } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionCenter = motion(Center);
const MotionImage = motion(Image);

const QUERY = gql`
  {
    homepageDescription {
      Header
      Content
    }
    gameTimetables {
      Operator
      logo {
        url
      }
    }
  }
`;

const GET_TABLE = gql`
  query ExampleQuery($timetablesWhere: JSON) {
    timetables(where: $timetablesWhere) {
      operator {
        Operator
      }
      game
      day
      closing_time
      draw_time
    }
  }
`;

export default function TimetableAndInfo() {
  const [table, setTable] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const client = useApolloClient();

  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const info = data.homepageDescription;
  const operators = data.gameTimetables;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minWidth="900px">
          <ModalHeader color="black">Timetable</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Table variant="simple">
              <Thead bg="red">
                <Tr>
                  <Th color="white">Game</Th>
                  <Th color="white">Day</Th>
                  <Th color="white">Closing Time</Th>
                  <Th color="white">Draw Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {table.length > 0 ? (
                  <>
                    {table.map((x, i) => (
                      <Tr key={i}>
                        <Td>{x.game}</Td>
                        <Td>{x.day}</Td>
                        <Td>{x.closing_time}</Td>
                        <Td>{x.draw_time}</Td>
                      </Tr>
                    ))}
                  </>
                ) : null}
              </Tbody>
              {table.length <= 0 ? (
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th>NO DATA!</Th>
                    <Th></Th>
                  </Tr>
                </Tfoot>
              ) : null}
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex direction="row" marginTop="10px" wrap="wrap">
        <Flex
          bg="white"
          w={{ base: "100%", md: "59%", lg: "59%" }}
          padding="30px"
        >
          <Stack spacing={3}>
            <Text color="red" fontSize="25px" fontWeight="bolder">
              {info.Header}
            </Text>
            <Text fontSize="20px" fontWeight="thin">
              {info.Content}
            </Text>
            {/* <MotionCenter whileHover={{ scale: 1.025 }}>
              <Center
                backgroundColor="grey"
                h="50px"
                width="300px"
                color="white"
                cursor="pointer"
                className={styles.btn}
              >
                <Text>MORE {"..."}</Text>
              </Center>
            </MotionCenter> */}
          </Stack>
        </Flex>
        <Spacer />
        <Flex
          bg="white"
          w={{ base: "100%", md: "39%", lg: "39%" }}
          h={{base: "100%", lg: "500px", md: "500px", sm: "100%"}}
          padding="30px"
        >
          <Table variant="simple" w="100%">
            <Thead backgroundColor="red">
              <Tr>
                <Th
                  color="white"
                  style={{ textTransform: "capitalize", fontWeight: "unset" }}
                >
                  <Flex direction="column" align="center">
                    <Text
                      fontSize="2xl"
                      color="white"
                      fontWeight="bold !important"
                      marginBottom="10px"
                    >
                      View Timetable
                    </Text>
                    <Text
                      fontSize="xl"
                      color="white"
                      fontWeight="bold !important"
                    >
                      Select Operator
                    </Text>
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Center>
                    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
                      {operators.map((x, i) => (
                        <MotionImage
                          onClick={async () => {
                            const { loading, error, data } = await client.query(
                              {
                                query: GET_TABLE,
                                variables: {
                                  timetablesWhere: {
                                    operator: {
                                      Operator: x.Operator,
                                    },
                                  },
                                },
                              }
                            );

                            if (loading) return;
                            if (error) return;

                            setTable(data.timetables);

                            onOpen();
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          cursor="pointer"
                          key={i}
                          src={`${x.logo.url}`}
                        />
                      ))}
                    </Grid>
                  </Center>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              {/* <MotionCenter whileHover={{ scale: 1.025 }}>
                <Center
                  backgroundColor="red"
                  h="50px"
                  width="300px"
                  color="white"
                  cursor="pointer"
                  className={styles.btn}
                >
                  <Text>MORE ...</Text>
                </Center>
              </MotionCenter> */}
            </Tfoot>
          </Table>
        </Flex>
      </Flex>
    </>
  );
}

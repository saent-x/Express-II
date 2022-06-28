import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import styles from "../styles/LotterySubscriptionTable.module.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

const QUERY = gql`
  {
    lotterySubscriptionCodes {
      lottery
      logo {
        url
      }
      subscription_code
    }
  }
`;

export default function LotterySuscriptionTable() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const list = data.lotterySubscriptionCodes;

  return (
    <div style={{ overflowX: "auto" }}>
      <Table variant="simple" marginTop="10px" bg="white">
        <Thead backgroundColor="red">
          <Tr>
            <Th color="white">LOTTERY</Th>
            <Th color="white">SUBSCRIPTION CODE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {list.map((x, i) => (
            <Tr key={i}>
              <Td>
                <Flex direction="row" align="center">
                  <Image
                    boxSize={{ base: "50px", lg: "70px", sm: "50px" }}
                    src={`${x.logo.url}`}
                  />
                  <Text
                    marginLeft="15px"
                    fontSize={{ base: "sm", md: "xl", lg: "lg", sm: "sm" }}
                    color="red"
                    fontWeight="bold"
                  >
                    {x.lottery}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Link
                  href={`tel:${x.subscription_code.substring(14)}`}
                  data-rel="external"
                >
                  <Text
                    marginLeft="15px"
                    fontSize={{ base: "sm", md: "xl", lg: "lg", sm: "sm" }}
                    color="red"
                    fontWeight="bold"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {x.subscription_code}
                  </Text>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {/* <Center
            backgroundColor="grey"
            h="50px"
            width="300px"
            color="white"
            cursor="pointer"
            className={styles.btn}
          >
            <Text>CLICK HERE FOR MORE CODES {">>"}</Text>
          </Center> */}
        </Tfoot>
      </Table>
    </div>
  );
}

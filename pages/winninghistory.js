import { Text, Box, Select, Flex, Input } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Button
} from '@chakra-ui/react';
import Layout from "../components/Layout";
import styles from "../styles/General.module.css"

export default function WinningHistory() {
    const Filter = () => (
        <div>
            <Text className={styles.pagetitle} fontSize='xl' style={{
                fontWeight: 700,
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Filter Options</Text>
            <Box bg='rgba(64, 103, 119, 0.05)' pb={5} pt={5} pr={3} pl={3}>
                <Flex className={styles.historyfilter} direction="row" justifyContent="space-around">
                    <Input className={styles.historyfilterInput} pr="15px" w="30%" borderWidth="2px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='From' />
                    <Input className={styles.historyfilterInput} w="30%" borderWidth="2px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='To' />
                    <div pr="15px" w="40%" style={{ display: "flex", flexDirection: "row" }}>
                        <Input mr="10px" borderWidth="2px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='search...' />
                        <Button bg='#254387' color="white">Search</Button>
                    </div>

                </Flex>

            </Box>
        </div>
    );

    const GameTimetable = () => (
        <div>
            <Text className={styles.pagetitle}  fontSize='xl' style={{
                fontWeight: 700,
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Timetable</Text>

            <TableContainer>
                <Table variant='simple' w="100%">
                    <Thead h="60px">
                        <Tr>
                            <Th bg="#254387" color="white">OPERATOR</Th>
                            <Th bg="#254387" color="white">GAME</Th>
                            <Th bg="#254387" color="white">DATE</Th>
                            <Th bg="#254387" color="white">RESULT</Th>
                            <Th bg="#254387" color="white">OPTION A</Th>
                            <Th bg="#254387" color="white">OPTION B</Th>
                            <Th bg="#254387" color="white">OPTION C</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>Baba Ijebu</Td>
                            <Td>Bazooka</Td>
                            <Td>26th January 2022</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                            <Td>22,34,45,64,34</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );

    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <Filter />
                <br />
                <GameTimetable />
            </div>
        </Layout>
    )
}
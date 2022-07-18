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
import genStyles from "../styles/General.module.css";
import { useRouter } from "next/router";
import WinningHistoryTableItem
    from "../components/WinningHistoryTableItem";
import { gql, GraphQLClient } from "graphql-request";
import moment from "moment";

function WinningHistory({ data }) {
    const router = useRouter();
    
    if (!data) return <></>

    data.winningHistories = data.winningHistories.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    const Filter = () => (
        <div>
            <Text className={styles.pagetitle} fontSize='xl' style={{
                fontWeight: 700,
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Filter Options</Text>
            <Box bg='rgba(64, 103, 119, 0.05)' pb={5} pt={5} pr={3} pl={3}>
                <Flex className={styles.historyfilter} direction="row" justifyContent="space-around">
                    <Input className={styles.historyfilterInput} pr="15px" w="30%" borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='From' />
                    <Input className={styles.historyfilterInput} w="30%" borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='To' />
                    <div pr="15px" w="40%" style={{ display: "flex", flexDirection: "row" }}>
                        <Input borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' placeholder='search...' />
                        <Button ml="10px" className={styles.hide} bg='#254387' color="white">Search</Button>
                    </div>
                    <Button mt={3} className={styles.unhide} bg='#254387' color="white" onClick={() => router.push("/m-winninghistory")}>Search</Button>

                </Flex>

            </Box>
        </div>
    );

    const GameTimetable = () => (
        <div>
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
                        {data.winningHistories.map((x, i) => (
                            <Tr key={i} h="60px" bg='rgba(64, 103, 119, 0.05)'>
                                <Td>{x.operator}</Td>
                                <Td>{x.game}</Td>
                                <Td>{moment(x.date).format("Do MMMM, YYYY")}</Td>
                                <Td>{x.result}</Td>
                                <Td>{x.optionA}</Td>
                                <Td>{x.optionB}</Td>
                                <Td>{x.optionC}</Td>
                            </Tr>))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );

    return (
        <Layout>
            {data ? (<div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <div className={genStyles.hide}>
                    <Filter />
                    <br />
                    <GameTimetable />
                </div>
                <div className={genStyles.unhide}>
                    <Text style={{
                        fontWeight: 800,
                        lineHeight: "15px",
                        color: "#186777"
                    }} mb={5}>Winning History</Text>
                    <Text style={{
                        lineHeight: "10px",
                        color: "#406777"
                    }} mb="30px">1 - 20 of 58 Records</Text>

                    {data.winningHistories.map((x, i) => (
                        <WinningHistoryTableItem key={i} data={x} />
                    ))}

                </div>
            </div>): null}
            
        </Layout>
    )
}

export const getStaticProps = async () => {
    const url = "https://api-eu-central-1.hygraph.com/v2/ckmap8352hll701ur8pj26xw9/master";

    const client = new GraphQLClient(url, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTgxMTc2NjksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2ttYXA4MzUyaGxsNzAxdXI4cGoyNnh3OS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWY5ZTdhYmQtMzllNi00OTg1LThkZWMtODdhNzJlNTE1OTI4IiwianRpIjoiY2w1cThnNXVxMnA4aDAxdWwyd296ZmQwcSJ9.IRWZOxVEmpGWvXLKw9LU5k8C_UjcdGNNeMq8flZN_9I-Ydub3r4pDBknKeX4m-3p0PbmAaRkC00G4tfafsNTCukap0hCVE14xO_p_lyGa2wbMtB9JC59UHAnmSTm4OaKCzRIDOg2Kx2G-5vOrtwORYMBEXiYhntRkeXiRgpVYGpPR768O5Lvn7iXbRpXn_c5-1s6Fatt3VxcxlEvD74-Ijl4OU05jMWYhzK9jD1Uw9nqXvZd7iVNYynL3tRLwGF7BjUziup0b5cCYd1j4n_NIfc846nIRQCI5LSNfKhYzfNJqsztU5Q07CR-LVpNA4I6HBYzwIYPF2Xj4LXLbXPAdxU8jmjVVS2siVgxL7jPR4OB_8TBzWpO62hz0KFkSKTMz4Ij3HHlWoNnS-84b91LRNoDB1smHZfmBuhWrCaWmbRbxu3tFXs-RI0RSHpvm11hH1nSHfQg2r6RqbpIKF69Rmr8pJPmYGIvOaNGFmZHc_6JNLi8u6DFI5RLh_8nPbL8jr7TmkcpB5GopLmjdER6WBeE-Rh2X21f0deMLuxXIn7c61Kp2rhT96XaURW7Bf5dEiTX-wNsec7Tjuu-VlaVkFRDALVx2JnFx1K5DdxvVPasvqJr9wKmDyMMCgU_rY12csH3QwCYyji-69lbI738sYyiANE5kJLbEzQ58ppp0_0"
        }
    });

    const query = gql`
    query {
  winningHistories {
    operator
    optionA
    optionB
    optionC
    result
    game
    date
  }
}
    `;

    const data = await client.request(query);

    return {
        props: {
            data
        }
    }
}

export default WinningHistory;
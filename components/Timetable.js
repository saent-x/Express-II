import { Text, Box, Select } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import styles from "../styles/General.module.css"
import moment from "moment";

export default function Timetable({ data }) {

    return (
        <div>
            <Text className={styles.pagetitle} fontSize='xl' style={{
                fontWeight: 700,
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Timetable</Text>

            <TableContainer>
                <Table variant='simple' w="60vw">
                    <Thead h="100px">
                        <Tr>
                            <Th fontSize="20px" bg="#254387" color="white">GAME</Th>
                            <Th fontSize="20px" bg="#254387" color="white">DAY</Th>
                            <Th fontSize="20px" bg="#254387" color="white">CLOSING TIME</Th>
                            <Th fontSize="20px" bg="#254387" color="white">DRAW TIME</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.timetables.map((x, i) =>
                        (<Tr key={i} h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>{x.game}</Td>
                            <Td>{x.day}</Td>
                            <Td>{moment(x.drawTime).format("hh:mm a")}</Td>
                            <Td>{moment(x.closingTime).format("hh:mm a")}</Td>
                        </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
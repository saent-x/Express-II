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

export default function Timetable() {
    return (
        <div>
            <Text fontSize='xl' style={{
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Timetable</Text>

            <TableContainer>
                <Table variant='simple' w="60vw">
                    <Thead h="60px">
                        <Tr>
                            <Th bg="#254387" color="white">GAME</Th>
                            <Th bg="#254387" color="white">DAY</Th>
                            <Th bg="#254387" color="white">CLOSING TIME</Th>
                            <Th bg="#254387" color="white">DRAW TIME</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                        <Tr h="60px" bg='rgba(64, 103, 119, 0.05)'>
                            <Td>MVAG MON</Td>
                            <Td>Monday</Td>
                            <Td>08.00 am</Td>
                            <Td>08.00 am</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}
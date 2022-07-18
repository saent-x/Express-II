import { Box, Center, Text, Stack, Button } from "@chakra-ui/react";
import styles from "../styles/General.module.css"
import moment from "moment";

export default function ResultCard({ data }) {
    return (
        <Box className={styles.ResultCard} mb={10} p="10px" bg="rgba(64, 103, 119, 0.05)">
            <Center>
                <Text className={styles.resultcardText1} fontSize='xl' style={{
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>{data.name}</Text>
            </Center>
            <Center>
                <Text className={styles.resultcardText2} style={{
                    fontWeight: "normal",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>Draw Time: {moment(data.drawtime).format("Do MMMM, YYYY, h:mm a")}</Text>
            </Center>
            <Center>
                <Text className={styles.resultcardText3} style={{
                    fontWeight: "normal",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={3}>Option A - ({data.optionA} Balls) | Option B - ({data.optionB} balls) | Option C - ({data.optionC} balls)</Text>
            </Center>

            <Center>
                <Stack className={styles.resultcardStack} direction={['row']}>
                    {(data.numbers.split(",")).map((x, i) => (
                        <Center key={i} color="white" w='50.83px' h='50.29px' bg='#27AE60' style={{ borderRadius: "100px" }}>
                            {x}
                        </Center>
                    ))}
                </Stack>
            </Center>
            <Center>
                <Button className={styles.resultcardBtn} color="white" bg='#254387' w="180px" h="40px">View more</Button>
            </Center>
        </Box>
    )
}
import { Box, Center, Text, Stack, Button } from "@chakra-ui/react";
import styles from "../styles/General.module.css"

export default function ResultCard() {
    return (
        <Box mb={10} p="10px" maxWidth="377.53px" h="246.46px" bg="rgba(64, 103, 119, 0.05)">
            <Center>
                <Text className={styles.resultcardText1} fontSize='xl' style={{
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>M - National</Text>
            </Center>
            <Center>
                <Text className={styles.resultcardText2} style={{
                    fontWeight: "normal",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>Draw Time: 28th Aug, 2021 | 10:20 AM</Text>
            </Center>
            <Center>
                <Text className={styles.resultcardText3} style={{
                    fontWeight: "normal",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={3}>Option A - (2 Balls) | Option B - (3 balls) | Option C - (5 balls)</Text>
            </Center>

            <Center>
                <Stack className={styles.resultcardStack} direction={['row']}>
                    <Center color="white" w='40.83px' h='40.29px' bg='#27AE60' style={{ borderRadius: "100px" }}>
                        1
                    </Center>
                    <Center color="white" w='40.83px' h='40.29px' bg='#254387' style={{ borderRadius: "100px" }}>
                        2
                    </Center>
                    <Center color="white" w='40.83px' h='40.29px' bg='#27AE60' style={{ borderRadius: "100px" }}>
                        3
                    </Center>
                    <Center color="white" w='40.83px' h='40.29px' bg='#254387' style={{ borderRadius: "100px" }}>
                        4
                    </Center>
                    <Center color="white" w='40.83px' h='40.29px' bg='#27AE60' style={{ borderRadius: "100px" }}>
                        5
                    </Center>
                </Stack>
            </Center>
            <Center>
                <Button className={styles.resultcardBtn} color="white" bg='#254387' w="147.47px" h="38.81px">View more</Button>
            </Center>
        </Box>
    )
}
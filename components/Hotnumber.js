import { Flex, Image, Box, VStack, Spacer, HStack, Text, Stack, Center, Button } from "@chakra-ui/react";
import styles from "../styles/General.module.css";

export default function Hotnumber() {
    return (
        <Flex w="100%">
            <Image className={styles.hotnumberImg} src="green 1.png" />
            <Box className={styles.hotnumberBox} bg="rgba(64, 103, 119, 0.05)">
                <VStack>
                    <HStack w="100%">
                        <div>
                            <Text className={styles.hotnumberText} fontSize='xl' style={{
                                fontWeight: 700,
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}>M - National</Text>
                            <Text className={styles.hotnumberTextDisplay} style={{
                                fontWeight: "normal",
                                fontSize: "15px",
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}>Draw Time: 28th Aug, 2021 | 10:20 AM</Text>
                        </div>
                        <Spacer />
                        <Text className={styles.hotnumberText2} fontSize='xl' style={{
                            fontWeight: 700,
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={1}>Option A</Text>
                    </HStack>
                    <HStack w="100%">
                        <div w="100%" className={styles.hotnumberCircleContainer}>
                            <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                1
                            </Center>
                            <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                2
                            </Center>
                            <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                3
                            </Center>
                            <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                4
                            </Center>
                            <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                5
                            </Center>
                        </div>
                        <Spacer className={styles.hide} />
                        <Button className={styles.hide} color="white" bg='#254387' w="250px" h="70px" mt={10}>Play now</Button>
                    </HStack>
                    <Text className={styles.unhide} fontSize='xl' style={{
                        fontSize: "14px",
                        lineHeight: "5px",
                        color: "#27AAE1",
                        margin: "5px"
                    }} mb={1}>00 days 00:13:54</Text>
                    <Button className={styles.unhide} color="white" bg='#254387' w="90%" h="50px">Play now</Button>
                </VStack>
            </Box>
        </Flex>
    )
}
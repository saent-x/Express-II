import { Flex, Image, Box, VStack, Spacer, HStack, Text, Stack, Center, Button } from "@chakra-ui/react";
import styles from "../styles/General.module.css";
import moment from "moment";
import { useRouter } from "next/router";

export default function Hotnumber({ data }) {
    const router = useRouter();
    return (
        <Flex w="100%">
            <Image className={styles.hotnumberImg} src={data.image.url} />
            <Box className={styles.hotnumberBox} bg="rgba(64, 103, 119, 0.05)">
                <VStack>
                    <HStack w="100%">
                        <div>
                            <Text className={styles.hotnumberText} fontSize='xl' style={{
                                fontWeight: 700,
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}>{data.title}</Text>
                            <Text className={styles.hotnumberTextDisplay} style={{
                                fontWeight: "normal",
                                fontSize: "15px",
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}><b>Draw Time: </b>{moment(data.drawtime).format("Do MMMM, YYYY, h:mm a")}</Text>
                        </div>
                        <Spacer />
                        <Text className={styles.hotnumberText2} fontSize='xl' style={{
                            fontWeight: 700,
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={1}>Option {data.option}</Text>
                    </HStack>
                    <HStack w="100%">
                        <div w="100%" className={styles.hotnumberCircleContainer}>
                            {(data.numbers.split(",")).map((x, i) => (
                                <Center className={styles.hotnumberCircle} color="white" bg='#379A08' style={{ borderRadius: "100px" }}>
                                    {x}
                                </Center>
                            ))}
                        </div>
                        <Spacer className={styles.hide} />
                        <Button onClick={()=> router.push(data.redirect)} className={styles.hide} color="white" bg='#254387' w="250px" h="70px" mt={10}>Play now</Button>
                    </HStack>
                    <Text className={styles.unhide} fontSize='xl' style={{
                        fontSize: "14px",
                        lineHeight: "5px",
                        color: "#27AAE1",
                        margin: "5px"
                    }} mb={1}>{moment(data.drawtime).format("Do MMMM, h:mm a")}</Text>
                    <Button onClick={() => router.push(data.redirect)}  className={styles.unhide} color="white" bg='#254387' w="90%" h="50px">Play now</Button>
                </VStack>
            </Box>
        </Flex>
    )
}
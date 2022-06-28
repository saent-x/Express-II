import { Box, Center, Text, Stack, Button } from "@chakra-ui/react";

export default function ResultCard() {
    return (
        <Box p="10px" maxWidth="377.53px" h="246.46px" bg="rgba(64, 103, 119, 0.05)">
            <Center>
                <Text fontSize='xl' style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>M - National</Text>
            </Center>
            <Center>
                <Text style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={1}>Draw Time: 28th Aug, 2021 | 10:20 AM</Text>
            </Center>
            <Center>
                <Text style={{
                    fontWeight: "normal",
                    fontSize: "10px",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={3}>Option A - (2 Balls) | Option B - (3 balls) | Option C - (5 balls)</Text>
            </Center>

            <Center>
                <Stack direction={['column', 'row']} spacing='24px'>
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
                <Button color="white" bg='#254387' w="147.47px" h="38.81px" mt={10}>View more</Button>
            </Center>
        </Box>
    )
}
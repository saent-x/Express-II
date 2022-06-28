import { Flex, Image, Box, VStack, Spacer, HStack, Text, Stack, Center, Button } from "@chakra-ui/react";

export default function Hotnumber() {
    return (
        <Flex w="100%">
            <Image style={{ alignSelf: "flex-start", marginRight: "30px" }} src="green 1.png" h="236px" mW="234px" />
            <Box h="236px" w="100%" bg="rgba(64, 103, 119, 0.05)" p="30px">
                <VStack>
                    <HStack w="100%">
                        <div>
                            <Text fontSize='xl' style={{
                                fontWeight: 700,
                                fontSize: "20px",
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}>M - National</Text>
                            <Text style={{
                                fontWeight: "normal",
                                fontSize: "15px",
                                lineHeight: "19px",
                                color: "#406777"
                            }} mb={1}>Draw Time: 28th Aug, 2021 | 10:20 AM</Text>
                        </div>
                        <Spacer/>
                        <Text fontSize='xl' style={{
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={1}>Option A</Text>
                    </HStack>
                    <HStack w="100%">
                        <Stack direction={['column', 'row']} spacing='24px'>
                    <Center color="white" w='88px' h='88px' bg='#379A08' style={{ borderRadius: "100px" }}>
                        1
                    </Center>
                    <Center color="white" w='88px' h='88px' bg='#379A08' style={{ borderRadius: "100px" }}>
                        2
                    </Center>
                    <Center color="white" w='88px' h='88px' bg='#379A08' style={{ borderRadius: "100px" }}>
                        3
                    </Center>
                    <Center color="white" w='88px' h='88px' bg='#379A08' style={{ borderRadius: "100px" }}>
                        4
                    </Center>
                            <Center color="white" w='88px' h='88px' bg='#379A08' style={{ borderRadius: "100px" }}>
                        5
                    </Center>
                        </Stack>
                        <Spacer/>
                        <Button color="white" bg='#254387' w="250px" h="70px" mt={10}>Play now</Button>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
    )
}
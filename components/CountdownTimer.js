import { Image, Center, Text } from "@chakra-ui/react";

export default function CountdownTimer() {
    const timeCounter = () => (
        <div style={{
            borderRadius: "5px",
            backgroundColor: "rgba(64, 103, 119, 0.1)",
            height: "75.07px",
            width: "94.38px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            margin: "5px"
        }}>
            <div style={{ margin: "5px" }}>
                <Text style={{
                    fontWeight: "normal",
                    fontSize: "23px",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb="3px">00</Text>
                <Text style={{
                    fontWeight: "normal",
                    fontSize: "18px",
                    lineHeight: "19px",
                    color: "#406777"
                }}>days</Text>
            </div>

        </div>
    );

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "200px",
            backgroundColor: "rgba(64, 103, 119, 0.05)",
            justifyContent: "space-between",
            flexWrap: "wrap"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Image style={{ alignSelf: "flex-start", marginRight: "30px" }} src="green 1.png" h="200px" mW="209.51px" />
                <Center>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <Text style={{
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={5}>M - Special</Text>
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: "15px",
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={5}>27th Aug, 2021 | 10:20 AM</Text>
                    </div>
                </Center>
            </div>

            <div style={{
                width: "444px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(64, 103, 119, 0.05)"
            }}>
                <Center style={{
                    height: "74px",
                    width: "100%",
                    backgroundColor: "#254387",
                }}>
                    <Text style={{
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "19px",
                        color: "#FFFFFF"
                    }}>Countdown to Next Game Draw</Text>
                </Center>
                <Center style={{
                    height: "100%",
                    width: "100%",
                }}>
                    {timeCounter()}
                    {timeCounter()}
                    {timeCounter()}
                    {timeCounter()}
                </Center>
            </div>

        </div>
    )
}
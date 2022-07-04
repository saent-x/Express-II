import { Image, Center, Text } from "@chakra-ui/react";
import styles from "../styles/General.module.css";

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
        <div className={styles.countdownTimerContainer} style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(64, 103, 119, 0.05)",
            justifyContent: "space-between",
            flexWrap: "wrap"
        }}>
            <div className={styles.countdownTimerInnerContainer} style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Image className={styles.countdownTimerImage} style={{ alignSelf: "flex-start", marginRight: "30px" }} src="green 1.png" mW="209.51px" />
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

            <div className={styles.countdownTimerBanner} style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(64, 103, 119, 0.05)"
            }}>
                <Center style={{
                    height: "74px",
                    width: "100%",
                    backgroundColor: "#254387",
                }}>
                    <Text className={styles.countdownTimerBannerText} style={{
                        fontWeight: 700,
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
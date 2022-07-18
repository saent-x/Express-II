import { Image, Center, Text } from "@chakra-ui/react";
import styles from "../styles/General.module.css";
import moment from "moment";
import Countdown from "react-countdown";

export default function CountdownTimer({ data }) {
    const filterCountdown = (gameTime) => {
        const date = moment(gameTime, "hh:mm:ss").toDate().valueOf();

        const now = Date.now();

        const miliseconds_countdown = date - now;
        return miliseconds_countdown < 0;
    }

    const getMilliseconds = (gameTime) => {
        if (filterCountdown(gameTime))
            return

        const date = moment(gameTime).toDate().valueOf();
        console.log(date);
        const now = Date.now();

        const miliseconds_countdown = date - now;
        return now + miliseconds_countdown;
    };

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <>
                {timeCounter("00", "day")}
                {timeCounter("00", "hrs")}
                {timeCounter("00", "mins")}
                {timeCounter("00", "secs")}
            </>;
        } else {
            // Render a countdown
            return <>
                {timeCounter(days, "day")}
                {timeCounter(hours, "hrs")}
                {timeCounter(minutes, "mins")}
                {timeCounter(seconds, "secs")}
            </>;
        }
    };

    const timeCounter = (value, name) => (
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
                }} mb="3px">{value}</Text>
                <Text style={{
                    fontWeight: "normal",
                    fontSize: "18px",
                    lineHeight: "19px",
                    color: "#406777"
                }}>{name}</Text>
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
                <Image className={styles.countdownTimerImage} style={{ alignSelf: "flex-start", marginRight: "30px" }} src={data.image.url} />
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
                        }} mb={5}>{data.name}</Text>
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: "15px",
                            lineHeight: "19px",
                            color: "#406777"
                        }} mb={5}>{moment(data.drawtime).format("Do MMMM, YYYY, h:mm a")}</Text>
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
                    <Countdown date={getMilliseconds(data.drawtime)} renderer={renderer} />
                </Center>
            </div>

        </div>
    )
}
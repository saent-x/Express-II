import { Text } from "@chakra-ui/react";
import styles from "../styles/General.module.css";

export default function TableItem() {
    return (
        <div style={{
            width: "100%",
            minHeight: "150px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                background: "rgba(64, 103, 119, 0.05)",
                padding: "20px",
            }}>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>Game:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>MVAG MON</Text>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                background: "rgba(64, 103, 119, 0.05)",
                padding: "20px"
            }}>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>Day:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>Monday</Text>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                background: "rgba(64, 103, 119, 0.05)",
                padding: "20px"
            }}>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>Draw Time:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>08:00pm</Text>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                background: "rgba(64, 103, 119, 0.05)",
                padding: "20px"
            }}>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>Closing Time:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>08:00pm</Text>
            </div>
        </div>
    )
}
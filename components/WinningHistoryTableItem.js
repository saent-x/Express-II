import { Text } from "@chakra-ui/react";
import styles from "../styles/General.module.css";

export default function WinningHistoryTableItem() {
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
                }}>Game Name:</Text>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>M - National</Text>
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
                }}>Date:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>26th Jan, 2021</Text>
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
                }}>Time:</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>11:12 PM</Text>
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
                }}>Operator</Text>
                <Text style={{
                    lineHeight: "12px",
                    color: "#406777"
                }}>Baba Ijebu</Text>
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
                }}>Today's Result</Text>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>2 . 3 . 22 . 15. 10 </Text>
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
                }}>Option A</Text>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>2 . 4 . 5 . 6 . 7</Text>
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
                }}>Option B</Text>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>28 . 47 . 54 . 6 .2 7</Text>
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
                }}>Option C</Text>
                <Text style={{
                    fontWeight: 700,
                    lineHeight: "12px",
                    color: "#406777"
                }}>12 . 4 . 15 . 6 . 17</Text>
            </div>
        </div>
    )
}
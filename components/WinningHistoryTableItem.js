import { Text } from "@chakra-ui/react";
import styles from "../styles/General.module.css";

export default function WinningHistoryTableItem({ data }) {    
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
                }}>{data.game}</Text>
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
                }}>{data.date}</Text>
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
                }}>{data.date}</Text>
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
                }}>{data.operator}</Text>
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
                }}>{data.result} </Text>
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
                }}>{data.optionA}</Text>
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
                }}>{data.optionB}</Text>
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
                }}>{data.optionC}</Text>
            </div>
        </div>
    )
}
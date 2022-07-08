import Layout from "../components/Layout";
import styles from "../styles/General.module.css";
import WinningHistoryTableItem
    from "../components/WinningHistoryTableItem";
import { Text } from "@chakra-ui/react";

export default function MobileWinningHistory() {
    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Text style={{
                    fontWeight: 800,
                    lineHeight: "15px",
                    color: "#186777"
                }} mb={5}>Winning History</Text>
                <Text style={{
                    lineHeight: "10px",
                    color: "#406777"
                }} mb="30px">1 - 20 of 58 Records</Text>
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
                <WinningHistoryTableItem />
            </div>
        </Layout>
    )
}
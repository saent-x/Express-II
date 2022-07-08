import Layout from "../components/Layout";
import styles from "../styles/General.module.css";
import TableItem
    from "../components/TableItem";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function MobileTimetable() {
    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                <Text style={{
                    lineHeight: "15px",
                    color: "#186777"
                }} mb={5}><Link href="/timetable"><a>{"<<"} Back</a></Link></Text>
                <Text style={{
                    fontWeight: 800,
                    lineHeight: "15px",
                    color: "#406777"
                }} mb="30px">Timetable results</Text>
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </div>
        </Layout>
    )
}
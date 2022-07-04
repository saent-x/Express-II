import { Text, Box, Select } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions";
import Timetable2 from "../components/Timetable";
import Layout from "../components/Layout";
import styles from "../styles/General.module.css";

export default function Timetable() {
    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "col", justifyContent: "flex-start" }}>
                <FilterOptions />
                <div style={{ flexGrow: "2" }}>
                    <Timetable2 />
                </div>
            </div>

        </Layout>
    )
}
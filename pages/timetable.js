import { Text, Box, Select } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions";
import Timetable from "../components/Timetable";
import styles from "../styles/Home.module.css";
import genStyles from "../styles/General.module.css";
import Layout from "../components/Layout";

export default function timetable() {
    return (
        <Layout>
            <div className={styles.home}>
                <div>
                    <FilterOptions />
                </div>
                <div className={genStyles.hide}>
                    <div className={styles.timetable} style={{ flexGrow: "2" }}>
                        <Timetable />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
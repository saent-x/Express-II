import { Text, Box, Select } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions";
import Timetable from "../components/Timetable";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div>
                <FilterOptions />
            </div>
            <div className={styles.timetable} style={{ flexGrow: "2" }}>
                <Timetable />
            </div>
        </div>
    )
}
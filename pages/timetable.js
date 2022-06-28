import { Text, Box, Select } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions";
import Timetable2 from "../components/Timetable";
import Layout from "../components/Layout";

export default function Timetable() {
    return (
        <Layout>
            <div style={{ padding: "50px", width: "100%", display: "flex", flexDirection: "col", justifyContent: "flex-start" }}>
                <FilterOptions />
                <div style={{ flexGrow: "2" }}>
                    <Timetable2 />
                </div>
            </div>

        </Layout>
    )
}
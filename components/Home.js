import { Text, Box, Select } from "@chakra-ui/react";
import FilterOptions from "../components/FilterOptions";
import Timetable from "../components/Timetable";

export default function Home() {
    return (
        <div style={{ padding: "50px", width: "100%", display: "flex", flexDirection: "col", justifyContent: "flex-start" }}>
            <FilterOptions />
            <div style={{ flexGrow: "2" }}>
                <Timetable />
            </div>
        </div>
    )
}
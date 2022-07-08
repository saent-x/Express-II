import { Text, Box, Select } from "@chakra-ui/react";
import styles from "../styles/General.module.css";
import {
    Button
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function FilterOptions(props) {
    const router = useRouter();
    return (
        <div className={styles.filterContainer}>
            <Text className={styles.pagetitle} fontSize='xl' style={{
                fontWeight: 700,
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Filter Options</Text>
            <Box className={styles.filterBox} bg='rgba(64, 103, 119, 0.05)' pb={10} pt={10} pr={3} pl={3}>
                <Select bg="white" placeholder='Select Operator'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <br />
                <Select bg="white" placeholder='Select Day'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <br />
                {/* first button for desktop */}
                <Button className={styles.hide} w="100%" bg='#254387' color="white">Filter</Button>
                {/* second button for mobile */}
                <Button className={styles.unhide} w="100%" bg='#254387' color="white" onClick={() => router.push("/m-timetable")}>Filter</Button>
            </Box>
        </div>
    )
}
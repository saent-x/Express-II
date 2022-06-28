import { Text, Box, Select } from "@chakra-ui/react";

export default function FilterOptions() {
    return (
        <div style={{paddingRight: "100px"}}>
            <Text fontSize='xl' style={{
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "19px",
                color: "#406777"
            }} mb={5}>Filter Options</Text>
            <Box bg='rgba(64, 103, 119, 0.05)' style={{minWidth: "300px"}} pb={10} pt={10} pr={3} pl={3}>
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
            </Box>
        </div>
    )
}
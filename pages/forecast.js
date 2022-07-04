import Layout from "../components/Layout";
import { Text, VStack } from "@chakra-ui/react";
import Hotnumber from "../components/Hotnumber";
import styles from "../styles/General.module.css"

export default function forecast() {
    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

                <Text className={styles.pagetitle} fontSize='xl' style={{
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={5}>Hot numbers for today</Text>
                <VStack spacing={4} w="100%">
                    <Hotnumber/>
                    <Hotnumber/>
                    <Hotnumber/>
                </VStack>
            </div>
        </Layout>
    )
}
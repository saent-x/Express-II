import { Text, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/Layout";
import CountdownTimer from "../components/CountdownTimer";
import ResultCard from "../components/ResultCard";
import styles from "../styles/General.module.css";

export default function results() {
    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column"}}>
                <Text className={styles.pagetitle} fontSize='xl' style={{
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={5}>Latest Results {'>>'} Operator</Text>
                <CountdownTimer/>
                <br />

                <div className={styles.ResultsGrid}>
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                    <ResultCard />
                </div>
                {/* <Grid
                    className={styles.ResultsGrid}
                    templateColumns='repeat(3, 1fr)'
                    gap={6}
                >
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                    <GridItem w="100%"><ResultCard /></GridItem>
                </Grid> */}

            </div>
        </Layout>

    )
}
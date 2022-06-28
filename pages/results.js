import { Text, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../components/Layout";
import CountdownTimer from "../components/CountdownTimer";
import ResultCard from "../components/ResultCard";

export default function results() {
    return (
        <Layout>
            <div style={{ padding: "50px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <Text fontSize='xl' style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={5}>Latest Results {'>>'} Operator</Text>
                <CountdownTimer/>
                <br />
                <Grid
                    templateColumns='repeat(3, 1fr)'
                    gap={4}
                >
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                    <GridItem><ResultCard /></GridItem>
                </Grid>

            </div>
        </Layout>

    )
}
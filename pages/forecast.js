import Layout from "../components/Layout";
import { Text, VStack } from "@chakra-ui/react";
import Hotnumber from "../components/Hotnumber";
import styles from "../styles/General.module.css"
import { gql, GraphQLClient } from "graphql-request";
import moment from "moment";

function forecast({ data }) {
    if (!data) return <></>

    return (
        <Layout>
            <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

                <Text className={styles.pagetitle} fontSize='xl' style={{
                    fontWeight: 700,
                    lineHeight: "19px",
                    color: "#406777"
                }} mb={5}>Hot numbers for today</Text>
                <VStack spacing={4} w="100%">
                    {data.hotnumbers.map((x, i) => (
                        <Hotnumber key={i} data={x} />
                    ))}
                </VStack>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const url = "https://api-eu-central-1.hygraph.com/v2/ckmap8352hll701ur8pj26xw9/master";

    const client = new GraphQLClient(url, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTgxMTc2NjksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2ttYXA4MzUyaGxsNzAxdXI4cGoyNnh3OS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWY5ZTdhYmQtMzllNi00OTg1LThkZWMtODdhNzJlNTE1OTI4IiwianRpIjoiY2w1cThnNXVxMnA4aDAxdWwyd296ZmQwcSJ9.IRWZOxVEmpGWvXLKw9LU5k8C_UjcdGNNeMq8flZN_9I-Ydub3r4pDBknKeX4m-3p0PbmAaRkC00G4tfafsNTCukap0hCVE14xO_p_lyGa2wbMtB9JC59UHAnmSTm4OaKCzRIDOg2Kx2G-5vOrtwORYMBEXiYhntRkeXiRgpVYGpPR768O5Lvn7iXbRpXn_c5-1s6Fatt3VxcxlEvD74-Ijl4OU05jMWYhzK9jD1Uw9nqXvZd7iVNYynL3tRLwGF7BjUziup0b5cCYd1j4n_NIfc846nIRQCI5LSNfKhYzfNJqsztU5Q07CR-LVpNA4I6HBYzwIYPF2Xj4LXLbXPAdxU8jmjVVS2siVgxL7jPR4OB_8TBzWpO62hz0KFkSKTMz4Ij3HHlWoNnS-84b91LRNoDB1smHZfmBuhWrCaWmbRbxu3tFXs-RI0RSHpvm11hH1nSHfQg2r6RqbpIKF69Rmr8pJPmYGIvOaNGFmZHc_6JNLi8u6DFI5RLh_8nPbL8jr7TmkcpB5GopLmjdER6WBeE-Rh2X21f0deMLuxXIn7c61Kp2rhT96XaURW7Bf5dEiTX-wNsec7Tjuu-VlaVkFRDALVx2JnFx1K5DdxvVPasvqJr9wKmDyMMCgU_rY12csH3QwCYyji-69lbI738sYyiANE5kJLbEzQ58ppp0_0"
        }
    });

    const query = gql`
    query {
  hotnumbers {
    redirect
    option
    title
    numbers
    drawtime
    image {
      url
    }
  }
}
    `;

    const data = await client.request(query);
    return {
        props: {
            data
        }
    }
}

export default forecast;
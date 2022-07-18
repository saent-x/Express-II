import Head from "next/head";
import Layout from "../components/Layout";
import Jumbotron from "../components/Jumbotron";
import LotterySuscriptionTable from "../components/LotterySubscriptionTable";
import BankcodeAdvert from "../components/BankcodeAdvert";
import GameTimer from "../components/GameTimer";
import InfoBanner from "../components/InfoBanner";
import TimetableAndInfo from "../components/TimetableAndInfo";
import Loading from "../components/LoadingScreen";
import React, { useState } from "react";
import WinningHistory from "./winninghistory";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import CountdownTimer from "../components/CountdownTimer";
import ResultCard from "../components/ResultCard";
import styles from "../styles/General.module.css";
import { gql, GraphQLClient } from "graphql-request";

function Index({ data }) {

  if (!data) return <></>

  data.games = data.games.sort(function (a, b) {
    return Date.parse(b.drawtime) - Date.parse(a.drawtime);
  });

  return (
    <>
      <Head>
        <title>Express Forecast</title>
        <link rel="icon" href="/fav-icon.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116302517-1"></script>
        <script>
          {/* window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)} */}
          {/* gtag('js', new Date());

          gtag('config', 'UA-116302517-1'); */}

        </script>
      </Head>
      {/* {!done ? <Loading /> : null} */}
        <Layout>
          <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Text className={styles.pagetitle} fontSize='xl' style={{
              fontWeight: 700,
              lineHeight: "19px",
              color: "#406777"
            }} mb={5}>Latest Results {'>>'} Operator</Text>
            <CountdownTimer data={data.games[0]} />
            <br />

            <div className={styles.ResultsGrid}>
              {data.games.map((x, i) =>
                <ResultCard key={i} data={x} />
              )}
            </div>
          </div>
        </Layout>
    </>
  );
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
        games {
    drawtime
    name
    numbers
    optionA
    optionB
    optionC
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

export default Index;

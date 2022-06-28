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
import Home from "../components/Home";
import WinningHistory from "./winninghistory";

export default function Index() {
  const [done, setDone] = useState(false);
  setTimeout(() => setDone(true), 5000);

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
      <div style={{ display: done ? "block" : "none" }}>
        <Layout>
          <Home/>
          {/* <WinningHistory/> */}
          {/* <LotterySuscriptionTable />
          <BankcodeAdvert />
          <GameTimer />
          <InfoBanner />
          <TimetableAndInfo /> */}
        </Layout>
      </div>
    </>
  );
}

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import withData from "../lib/apollo";

import Router from "next/router";
import withGA from "next-ga";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <>
          <Head>
            <script
              type="text/javascript"
            ></script>
          </Head>
          <Component {...pageProps} />
    </>
  );
}

export default withGA("UA-116302517-1", Router)(withData(MyApp));

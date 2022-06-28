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
          dangerouslySetInnerHTML={{
            __html: `
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6074531c067c2605c0c1a226/1f33699vn';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withGA("UA-116302517-1", Router)(withData(MyApp));

import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import BottomInfo from "../components/BottomInfo";
import { ChakraProvider } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

export default function Layout(props) {
  return (
    <ChakraProvider>
      <div className={styles.layout}>
        <Header />
        <Jumbotron />
        <img style={{visibility: "hidden"}} src="//serve.popads.net/cpixel.php?cid=27614859494d058dcdd6aa8e0a5ddc54&amp;value=conversionValue" />
        {props.children}
        <footer className={styles.footer}>
           <Footer />
        </footer>
      </div>
    </ChakraProvider>
  );
}

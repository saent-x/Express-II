import { Button, Center, Checkbox, Input, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import styles from "../styles/General.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";

export default function Login() {
    return (
        <ChakraProvider>
            <div>
                <Header/>
                <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

                    <Center>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "60px"
                        }}>
                            <Center>
                                <Text style={{
                                    fontSize: "30px",
                                    fontWeight: 700,
                                    lineHeight: "25px",
                                    color: "#406777",
                                    maxWidth: "460px"
                                }} mb={5}>Login</Text>
                            </Center>

                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="email" placeholder='Email Address' />
                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="password" placeholder='Password' />
                            <Checkbox defaultChecked color="#406777">I have read the <Link href=""><a style={{ textDecoration: "underline dotted" }}>Terms and Conditions</a></Link></Checkbox>
                            <Button mt="30px" maxWidth="460px" h="50px" w="100%" bg='#254387' color="white">Login</Button>
                            <Center>
                                <Text color="#406777" style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    color: "#406777",
                                    maxWidth: "460px",
                                    textAlign: "center"
                                }} mt={2}>
                                    <Link href="/register"><a style={{ textDecoration: "underline dotted" }}>create a new account...</a></Link>
                                </Text>
                            </Center>
                        </div>
                    </Center>
                </div>
                <Footer />
            </div>
        </ChakraProvider>
    )
}
import { Button, Center, Checkbox, Input, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import styles from "../styles/General.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../components/Header";

export default function Register() {
    return (
        <ChakraProvider>
            <div>
                <Header/>
                <div className={styles.layoutPadding} style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>

                    <Center>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "40px"
                        }}>
                            <Center>
                                <Text style={{
                                    fontSize: "30px",
                                    fontWeight: 700,
                                    lineHeight: "25px",
                                    color: "#406777",
                                    maxWidth: "460px"
                                }} mb={5}>Register</Text>
                            </Center>
                            <Center>
                                <Text style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    color: "#406777",
                                    maxWidth: "460px",
                                    textAlign: "center"
                                }} mb={30}>Register on expressforecast to get access to free lotto forecast for your favorite Nigerian lotto games to increase your chances of winning. These forecasts are AI driven to give you the best accuraccy and forecasts.</Text>
                            </Center>

                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="text" placeholder='Full Name' />
                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="text" placeholder='Username' />
                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="email" placeholder='Email Address' />
                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="tel" placeholder='Phone Number' />
                            <Input maxWidth="460px" mb={5} borderWidth="0.8px" borderColor="#254387" color="#254387" bg="white" variant='outline' type="password" placeholder='Password' />
                            <Checkbox defaultChecked color="#406777">I have read the <Link href=""><a style={{ textDecoration: "underline dotted" }}>Terms and Conditions</a></Link></Checkbox>
                            <Button mt="30px" maxWidth="460px" h="50px" w="100%" bg='#254387' color="white">Register</Button>
                            <Center>
                                <Text color="#406777" style={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    color: "#406777",
                                    maxWidth: "460px",
                                    textAlign: "center"
                                }} mt={2}>
                                    <Link href="/login"><a style={{ textDecoration: "underline dotted" }}>go back to login...</a></Link>
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
import { Nav, Navbar, Form } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import styles from "../styles/Header.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <ToastContainer />
      
      <Navbar
        className={styles.navbar1}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo.png"
            width="130"
            height="80"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={styles.link} href="/forecast">
              Forecast
            </Nav.Link>
            <Nav.Link
              className={styles.link}
              onClick={() => router.push("/")}
            >
              Results
            </Nav.Link>
            <Nav.Link
              className={styles.link}
              onClick={() => router.push("/timetable")}
            >
              Timetable
            </Nav.Link>
            <Nav.Link
              className={styles.link}
              onClick={() => router.push("/winninghistory")}
            >
              Winning History
            </Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <Button
                backgroundColor="#FFF200"
                variant="ghost"
                color="black"
                size="md"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

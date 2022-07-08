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
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const QUERY = gql`
  {
    logo {
      logo_file {
        url
      }
    }
    newsletterBackground {
      background {
        url
      }
    }
  }
`;

const ADD_SUBSCRIBER = gql`
  mutation CreateNewsletterSubscriberMutation(
    $createNewsletterSubscriberInput: createNewsletterSubscriberInput
  ) {
    createNewsletterSubscriber(input: $createNewsletterSubscriberInput) {
      newsletterSubscriber {
        name
        email
        phone
      }
    }
  }
`;

export default function Header() {
  const router = useRouter();
  const [subscriber, setSubscriber] = useState({
    name: "",
    email: "",
    phone: 0,
  });
  const [saving, setSaving] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addsubscriber] = useMutation(ADD_SUBSCRIBER);
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;


  const subscribe = () => {
    if (
      subscriber.name.trim() === "" ||
      subscriber.email.trim() === "" ||
      subscriber.phone < 0
    ) {
      toast.info("Fill in the boxes!!", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        progress: undefined,
      });
    }
    setSaving(true);

    addsubscriber({
      variables: {
        createNewsletterSubscriberInput: {
          data: {
            ...subscriber,
          },
        },
      },
    })
      .then((result) => {
        setTimeout(async () => {
          setSaving(false);
          toast.success("Successful!! 😃", {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
          });
          onClose();
        }, 2000);
      })
      .catch((error) => {
        setSaving(false);
        toast.error("Please try again! 😪", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          progress: undefined,
        });
      });
  };

  const onInput = (e) => {
    const obj = { ...subscriber };
    obj[e.target.id] = e.target.value;
    setSubscriber(obj);
  };
  return (
    <>
      <ToastContainer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Image
            src={`${data.newsletterBackground.background.url}`}
            h="100%"
            w="100%"
            position="absolute"

          />
          <ModalHeader color="black">Subscribe</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt="100px">
            <FormControl mb="10px">
              <Input
                bg="white"
                placeholder="name"
                id="name"
                value={subscriber.name}
                onChange={(e) => onInput(e)}
              />
            </FormControl>
            <FormControl mb="10px">
              <Input
                bg="white"
                placeholder="email"
                id="email"
                value={subscriber.email}
                onChange={(e) => onInput(e)}
              />
            </FormControl>
            <FormControl mb="10px">
              <Input
                bg="white"
                type="number"
                placeholder="phone"
                id="phone"
                onChange={(e) => onInput(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={saving}
              loadingText="subscribing"
              colorScheme="red"
              mr={3}
              onClick={subscribe}
            >
              Subscribe
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            src="/logo-a.png"
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

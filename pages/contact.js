import Layout from "../components/Layout";
import {
  Center,
  Text,
  Stack,
  Box,
  Flex,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  HStack,
  VStack,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ADD_MESSAGE = gql`
  mutation CreateMessageMutation($createMessageInput: createMessageInput) {
    createMessage(input: $createMessageInput) {
      message {
        name
        email
        phone
        subject
        message
      }
    }
  }
`;

export default function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [saving, setSaving] = useState(false);

  const [addmessage] = useMutation(ADD_MESSAGE);

  const onInput = (e) => {
    const obj = { ...details };
    obj[e.target.id] = e.target.value;
    setDetails(obj);
  };

  const sendMessage = () => {
    if (
      details.name.trim() === "" ||
      details.email.trim() === "" ||
      details.phone < 0 ||
      details.subject.trim() === "" ||
      details.message.trim() === ""
    ) {
      toast.info("Fill in the boxes!!", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        progress: undefined,
      });
    }
    setSaving(true);

    addmessage({
      variables: {
        createMessageInput: {
          data: {
            ...details,
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

  return (
    <Layout>
      <ToastContainer />
      <Center w="100%" h="250px" backgroundImage="url('/pbg.png')">
        <Stack>
          <Center>
            <Text
              color="white"
              fontSize="5xl"
              fontWeight="bolder"
              borderLeftColor="white"
              borderLeftWidth="5px"
            >
              CONTACT
            </Text>
          </Center>
        </Stack>
      </Center>
      <Center bg="white" p={{base: "0px", sm: "30px"}}>
        <VStack>
          <Text
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "4xl", lg: "4xl", sm: "xl" }}
            m={{ base: "30px", sm: "10px"}}
          >
            Let's Start a Conversation
          </Text>
          <HStack spacing="10">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="name"
                value={details.name}
                onChange={(e) => onInput(e)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={details.email}
                onChange={(e) => onInput(e)}
              />
            </FormControl>
          </HStack>
          <FormControl id="phone">
            <FormLabel>Phone</FormLabel>
            <Input
              type="phone"
              type="number"
              value={details.phone}
              onChange={(e) => onInput(e)}
            />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Subject</FormLabel>
            <Input
              type="subject"
              value={details.subject}
              onChange={(e) => onInput(e)}
            />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea
              h="200px"
              id="message"
              size="lg"
              placeholder="enter your message"
              value={details.message}
              onChange={(e) => onInput(e)}
            />
          </FormControl>
          <br />
          <Button
            w="100%"
            colorScheme="red"
            size="lg"
            isLoading={saving}
            loadingText="sending"
            color="white"
            onClick={sendMessage}
          >
            Send Message
          </Button>
          <br />
        </VStack>
      </Center>
    </Layout>
  );
}

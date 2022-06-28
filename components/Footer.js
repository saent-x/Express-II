import {
  Flex,
  Text,
  Stack,
  Divider,
  Center,
  Image,
  Spacer,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionImage = motion(Image);

const QUERY = gql`
  {
    footerHeadline1 {
      header
      content
    }
    footerHeadline2 {
      header
      content
    }
    footerHeadline3 {
      header
      content
    }
    socials {
      image {
        url
      }
      link
    }
  }
`;

export default function Footer() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  return (
    <Flex p="100px" bg="#254387" direction="row" justifyContent="space-around" wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}>
      <Image w={130} h={20} src="/logo-a.png"></Image>
      <Text fontSize='15px' w="329px" color="white">Our role is simply to serve you better so that you can make better informed betting decisions for licenced operators.</Text>
      <UnorderedList styleType="none" color="white" fs="15px">
        <ListItem><Link color="white" href="#">About Us</Link></ListItem>
        <ListItem><Link color="white" href="#">Help</Link></ListItem>
        <ListItem><Link color="white" href="#">Disclaimer</Link></ListItem>
      </UnorderedList>
      <UnorderedList styleType="none" color="white" fs="15px">
        <ListItem><Link color="white" href="#">Terms and Conditions</Link></ListItem>
        <ListItem><Link color="white" href="#">How to Play Lotto</Link></ListItem>
      </UnorderedList>

      <div>
        <Text fontSize='15px' color="white">Download App</Text>
        <Image src="/ps.jpg" h={50} w={150}></Image>
        <Center><Text fontSize='15px' color="white">or</Text></Center>
        <Button size='lg' bg="#254387" color="white" borderColor="white" borderWidth="1px">Download APK</Button>
      </div>
    </Flex>
  );
}

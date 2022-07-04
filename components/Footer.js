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
import styles from "../styles/General.module.css";

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
    <Flex className={styles.footer} bg="#254387" justifyContent="space-around" wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}>
      <Image className={styles.footerMargin} w={130} h={20} src="/logo-a.png"></Image>
      <Text className={styles.footerText} fontSize='15px' color="white">Our role is simply to serve you better so that you can make better informed betting decisions for licenced operators.</Text>
      <div className={styles.footerMargin}>
        <UnorderedList styleType="none" color="white" fs="15px">
          <ListItem p={2}><Link color="white" href="#">About Us</Link></ListItem>
          <ListItem p={2}><Link color="white" href="#">Help</Link></ListItem>
          <ListItem p={2}><Link color="white" href="#">Disclaimer</Link></ListItem>
        </UnorderedList>
        <UnorderedList styleType="none" color="white" fs="15px">
          <ListItem p={2}><Link color="white" href="#">Terms and Conditions</Link></ListItem>
          <ListItem p={2}><Link color="white" href="#">How to Play Lotto</Link></ListItem>
        </UnorderedList>
      </div>

      <div className={styles.footerMargin}>
        <Text fontSize='15px' color="white">Download App</Text>
        <Image src="/ps.jpg" h={50} w={150}></Image>
        <Center><Text fontSize='15px' color="white">or</Text></Center>
        <Button size='lg' bg="#254387" color="white" borderColor="white" borderWidth="1px">Download APK</Button>
      </div>
    </Flex>
  );
}

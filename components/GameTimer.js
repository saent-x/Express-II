import {
  Flex,
  Center,
  Image,
  Divider,
  Text,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";
import moment from "moment";
import Countdown from "react-countdown";
import { useRouter } from "next/router";

const MotionButton = motion(Button);
const MotionCenter = motion(Center);

const QUERY = gql`
  {
    timetables {
    game
    day
    draw_time
    link
    operator{
      Operator
      logo{
        url
      }
    }
  }
}
`;

export default function GameTimer() {
  const router = useRouter();
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;
  
  const day = moment().format('dddd');
  let gameTimes = data.timetables.filter(x => x.day.toLocaleLowerCase() === day.toLocaleLowerCase());

  const filterCountdown = (gameTime) => {
    const date = moment(gameTime, "hh:mm:ss").toDate().valueOf();
    const now = Date.now();

    const miliseconds_countdown = date - now;
    return miliseconds_countdown < 0;
  }

  gameTimes = gameTimes.filter(x => filterCountdown(x.draw_time) === false);

  const getMilliseconds = (gameTime) => {
    const date = moment(gameTime, "hh:mm:ss").toDate().valueOf();
    const now = Date.now();

    const miliseconds_countdown = date - now;
    return now + miliseconds_countdown;
  };

  return (
    <Flex
      direction="row"
      marginTop="10px"
      justify="center"
      spacing={8}
      wrap="wrap"
    >
      {gameTimes.map((x, i) => (
        <MotionCenter
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          borderRadius="10px"
          boxShadow="sm"
          bg="white"
          flexWrap="wrap"
          w="300px"
          h="100%"
          key={i}
          margin="10px"
          paddingBottom="20px"
          pt="20px"
        >
          <VStack>
            <Image src={`${x.operator.logo.url}`} />
            <Divider marginTop="10px" borderColor="red" w="70%" />
            <Text textTransform="uppercase" fontSize="lg" fontWeight="bold" color="red">
              NEXT {" "}{x.operator.Operator} {" "} GAME
            </Text>
            <Divider borderColor="red" w="70%" />
            <Text fontSize="2xl" fontWeight="extrabold" color="red">
              {x.game}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="black">
              TIME TO DRAW
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="black">
              <Countdown date={getMilliseconds(x.draw_time)} />
            </Text>
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              colorScheme="red"
              size="lg"
              onClick={() => router.push(x.link)}
            >
              Play Now
            </MotionButton>
          </VStack>
        </MotionCenter>
      ))}
    </Flex>
  );
}

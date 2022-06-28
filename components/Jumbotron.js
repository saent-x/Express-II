import {
  Flex,
  Image,
  Spacer,
  Center,
  Text,
  Stack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useBreakpointValue } from "@chakra-ui/react";

const QUERY = gql`
  {
    slideShows {
      image {
        url
      }
      mobile {
        url
      }
    }
    primaryBanner {
      banner_background {
        url
      }
    }
  }
`;

const MotionImage = motion(Image);
const MotionText = motion(Text);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Jumbotron() {
  const value = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    sm: "sm",
  });

  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const view = (x) => {
    return value === "sm" ? `${x.mobile.url}` : `${x.image.url}`;
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
   
      <Image src='/banner1.png' h="350px" w="100%"></Image>
      <Image src='/banner2.png' h="350px" w="100%"></Image>
      <Image src='/banner3.png' h="350px" w="100%"></Image>
      <Image src='/banner4.png' h="350px" w="100%"></Image>

    </Carousel>
  );
}

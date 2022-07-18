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
import { useBreakpointValue } from "@chakra-ui/react";
import styles from "../styles/General.module.css";
import { GraphQLClient, gql } from 'graphql-request'
import { useState } from "react";

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
  const [data, setData] = useState(null);

  const endpoint = 'https://api-eu-central-1.hygraph.com/v2/ckmap8352hll701ur8pj26xw9/master'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTgxMTc2NjksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2ttYXA4MzUyaGxsNzAxdXI4cGoyNnh3OS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWY5ZTdhYmQtMzllNi00OTg1LThkZWMtODdhNzJlNTE1OTI4IiwianRpIjoiY2w1cThnNXVxMnA4aDAxdWwyd296ZmQwcSJ9.IRWZOxVEmpGWvXLKw9LU5k8C_UjcdGNNeMq8flZN_9I-Ydub3r4pDBknKeX4m-3p0PbmAaRkC00G4tfafsNTCukap0hCVE14xO_p_lyGa2wbMtB9JC59UHAnmSTm4OaKCzRIDOg2Kx2G-5vOrtwORYMBEXiYhntRkeXiRgpVYGpPR768O5Lvn7iXbRpXn_c5-1s6Fatt3VxcxlEvD74-Ijl4OU05jMWYhzK9jD1Uw9nqXvZd7iVNYynL3tRLwGF7BjUziup0b5cCYd1j4n_NIfc846nIRQCI5LSNfKhYzfNJqsztU5Q07CR-LVpNA4I6HBYzwIYPF2Xj4LXLbXPAdxU8jmjVVS2siVgxL7jPR4OB_8TBzWpO62hz0KFkSKTMz4Ij3HHlWoNnS-84b91LRNoDB1smHZfmBuhWrCaWmbRbxu3tFXs-RI0RSHpvm11hH1nSHfQg2r6RqbpIKF69Rmr8pJPmYGIvOaNGFmZHc_6JNLi8u6DFI5RLh_8nPbL8jr7TmkcpB5GopLmjdER6WBeE-Rh2X21f0deMLuxXIn7c61Kp2rhT96XaURW7Bf5dEiTX-wNsec7Tjuu-VlaVkFRDALVx2JnFx1K5DdxvVPasvqJr9wKmDyMMCgU_rY12csH3QwCYyji-69lbI738sYyiANE5kJLbEzQ58ppp0_0',
    },
  })

  const query = gql`
    query {
      banners {
    image {
      url
    }
  }
    }
  `

  graphQLClient.request(query)
    .then(data => {
      setData(data.banners)
    })
    .catch(err => console.log(err))

  return (
    <>
      {
        data ? (<Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={7000}
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

          {data.map((x, i) => (<Image fit="fill" key={i} className={styles.carouselImage} src={x.image.url} w="100%"></Image>))}

        </Carousel>) : null}
    </>
  );
}

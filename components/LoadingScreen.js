import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import { Center } from "@chakra-ui/layout";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    loadingScreen {
      image {
        url
      }
    }
  }
`;

export default function Loading(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  return (
    <Center
      margin={0}
      padding={0}
      top={0}
      left={0}
      zIndex={99999999}
      h="100vh"
      m="0"
      pos="absolute"
      w="100%"
      backgroundImage={`url(${data.loadingScreen.image.url})`}
    >
      <FadeIn>
        <ReactLoading type={"bars"} color={"white"} />
      </FadeIn>
    </Center>
  );
}

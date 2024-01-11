import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import {
  Text,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

function Exchange() {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const[error,seterror]=useState(false)

  useEffect(() => {
    const fetchexchange = async () => {
      
        try {
            const { data } = await axios.get(`${server}/exchanges`);
            setexchanges(data);
            setloading(false);
        } catch (error) {
            seterror(true)
            setloading(false)
        }

    };
    fetchexchange();
  }, []);

  if(error) return <ErrorComponent message={"Error While Fetching the API "}/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCart
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}


const ExchangeCart = ({  name, img, url, rank }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"50"}
      shadow={"lg"}
      p={"9"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1    )",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {" "}
        {rank}
      </Heading>
      <Text noOfLines={1} size={"md"}>
        {name}
      </Text>
    </VStack>
  </a>
);

export default Exchange;

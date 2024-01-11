import {
    Text,
    Box,
    Container,
    RadioGroup,
    Radio,
    VStack,
    Image,
    Stat,
    StatLabel,
    StatNumber,
    HStack,
    StatHelpText,
    StatArrow,
    Badge,
    Progress,
    Button,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  import Loader from "./Loader";
  import { useParams } from "react-router-dom";
  import { server } from "../main";
  import ErrorComponent from "./ErrorComponent";
  import axios from "axios";
  import Chart from "./Chart";
  
  function CoinDetail(props) {
    const [coin, setcoin] = useState({});
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    const [currency, setcurrency] = useState("inr");
  
    const [days, setdays] = useState("24h");
    const [chatarray, setchatarray] = useState([]);
  
    const currencySymbol =
      currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  
    const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];
  
    const params = useParams();
  
    const switchChartStats = (key) => {
      switch (key) {
        case "24h":
          setdays("24h");
          setloading(true);
          break;
  
        case "7d":
          setdays("7d");
          setloading(true);
          break;
        case "14d":
          setdays("14d");
          setloading(true);
          break;
        case "30d":
          setdays("30d");
          setloading(true);
          break;
  
        case "60d":
          setdays("60d");
          setloading(true);
          break;
  
        case "200d":
          setdays("200d");
          setloading(true);
          break;
  
        case "365d":
          setdays("365d");
          setloading(true);
          break;
  
        case "max":
          setdays("max");
          setloading(true);
          break;
  
        default:
          setdays("24h");
          setloading(true);
          break;
      }
    };
  
    useEffect(() => {
      const fetchcoin = async () => {
        try {
          const { data } = await axios.get(`${server}/coins/${params.id}`);
  
          const { data: chatdata } = await axios.get(
            `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
          );
          setcoin(data);
          setchatarray(chatdata.prices);
          console.log(data);
          setloading(false);
        } catch (error) {
          seterror(true);
          setloading(false);
        }
      };
      fetchcoin();
    }, [params.id, currency, days]);
  
    if (error)
      return <ErrorComponent message={"Error While Fetching the Coins API  "} />;
  
    return (
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box borderWidth={"3"} w={"full"}>
              <Chart arr={chatarray} currency={currencySymbol} days={days} />
            </Box>
  
            <HStack p={"4"} wrap={"wrap"}>
              {btns.map((i) => (
                <Button key={i} onClick={() => switchChartStats(i)}>
                  {i}
                </Button>
              ))}
            </HStack>
  
            <RadioGroup value={currency} onChange={setcurrency} p={"7"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>
  
            <VStack spacing={"5"} p={"15"} alignItems={"flex-start"}>
              <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>
                Last Updated on{" "}
                {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>
  
              <Image
                src={"coin.image.large"}
                w={"15"}
                h={"16"}
                objectFit={"contain"}
              />
  
              <Stat>
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>
                  {currencySymbol}
                  {coin.market_data.currrent_price[currency]}
                </StatNumber>
  
                <StatHelpText>
                  <StatArrow
                    type={
                      coin.market.data.price_change_percentage_24h > 0
                        ? "increase"
                        : "decrease"
                    }
                  />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
  
              <Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>
                {`#${coin.market_cap_rank}`}
              </Badge>
  
              <CustomBar
                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
              />
  
              <Box w={"full"} p={"4"}>
                <Item title={"Max Supply"} value={coin.market_data.max_supply} />
                <Item
                  title={"Circulating Supply"}
                  value={coin.market_data.circulating_supply}
                />
                <Item
                  title={"Market Cap"}
                  value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                />
  
                <Item
                  title={"All Time Low"}
                  value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                />
  
                <Item
                  title={"All Time high"}
                  value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                />
              </Box>
            </VStack>
          </>
        )}
      </Container>
    );
  }
  
  const CustomBar = ({ high, low }) => {
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} w={"full"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={low} colorScheme={"red"} />
        <Text fontSize={"sm"}> 24H Range </Text>
        <Badge children={full} colorScheme="green" />
      </HStack>
    </VStack>;
  };
  
  const Item = ({ title, value }) => {
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
      <Text fontFamily={"sans-serif"} letterSpacing={"inherit"}>
        {title}
      </Text>
      <Text>{value}</Text>
    </HStack>;
  };
  
  export default CoinDetail;
  
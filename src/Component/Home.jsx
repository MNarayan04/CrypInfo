import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img from "../assets/img.jpg";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <>
      <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
        <motion.div style={{
            height:"70vh",
        }}
        animate={{
            translateY:"40px",

        }}
        transition={{
            duration:2,
            repeat:Infinity,
            repeatType:"reverse"
        }}

        >
          <Image
            w={"full"}
            h={"90%"}
            objectFit={"contain"}
            src={img}
            filter={"greyscale(1)"}
          />
        </motion.div>

        <Text
          fontSize={"6xl"}
          textAlign={"center"}
          fontWeight={"lg"}
          color={"white"}
          mt={"20"}
        >
          CrypInfo
        </Text>
      </Box>

     
    </>
  );
}

export default Home;

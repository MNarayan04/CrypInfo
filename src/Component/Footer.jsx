import React from 'react';
import {Avatar, Box, Stack, VStack,Text} from '@chakra-ui/react'

function Footer(props) {
    return (
        <Box 
        bgColor={"blue"}
        color={"white"}
        minH={"48"}
        px={"16"}
        py={["16",'8']}
        >


          <Stack direction={["column",'row']} h={"full"} alignItems={'center'} >
            
            <VStack w={"full"} alignItems={["center","flex-start"]}  >

            <Text fontWeight={"bold"} >
                About as
            </Text>
            <Text letterSpacing={"widest"} textAlign={["center","left"]}  fontSize={"sm"}>we are Lorem, ipsum dolor.</Text>

            </VStack>

            <VStack >

                <Avatar boxSize={"25"} mt={['14','0']} />
                <Text fontWeight={"bold"} textAlign={"center"} >Our Founder </Text>
            </VStack>

            
            </Stack>  

        </Box>
    );
}

export default Footer;
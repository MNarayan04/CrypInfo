import { Button, HStack,Link as ChakraLink} from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom'

function Header() {
    return (
        
        <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
            <Button variant={"unstyled"} color={"white"}>
                <ChakraLink as={ReactRouterLink} to="/" >Home</ChakraLink>
            </Button>

            <Button variant={"unstyled"} color={"white"}>
                <ChakraLink  as={ReactRouterLink} to="/exchange" >Exchange</ChakraLink>
            </Button>


            <Button variant={"unstyled"} color={"white"}>
                <ChakraLink as={ReactRouterLink}     to="/coins" >Coins</ChakraLink>
            </Button>

        </HStack>
        
    );
}

export default Header;
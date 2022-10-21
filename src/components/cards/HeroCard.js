import React from 'react';
import{ 
    Flex,
    Box,
    Text,
   
} from '@chakra-ui/react';
import { FaBitcoin } from "react-icons/fa";

const HeroCard = ({to,btcName, amount,borderLeft}) => {
    return (
        <Flex
        borderLeft={borderLeft}
        opacity={0.5} 
        cursor="pointer"
        px={2}
        py={2}
        _hover={{
            opacity:1,
            // borderLeft:{borderLeft}
            
        }}
        as="a" href={to}
        fontSize="sm"
       
        >
            <Flex
            justifyContent="center"
            alignItems="center"
            fontSize="50px"
            color="#f6931a"
            mr={4}
            >
                <FaBitcoin />
            </Flex>
            <Box>
            <Text mb={"2px"}>{btcName}</Text>
            <Text>{amount}</Text>
            </Box>
            
        </Flex>
    )
}

export default HeroCard

import React from 'react';
import {
    Flex,
    Text,
    Image,
    GridItem
} from "@chakra-ui/react";

const SimpleCards = ({text,src}) => {
    return (
        <GridItem
        bg="#fff"
        p={4}
        boxShadow="lg"
        borderRadius="lg"
        display="flex"
        >
            <Image src={src} />
            <Text ml={[6]} fontWeight="500">{text}</Text>
            
        </GridItem>
    )
}

export default SimpleCards

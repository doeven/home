import React, {useState, useEffect} from 'react';
import{ 
    Flex,
    Box,
    Text,
    Heading,
    Image,
    Grid,
    Input,
    Select,
    Button,
    SimpleGrid
} from '@chakra-ui/react';
import $ from 'jquery';
import {http} from '../funcs';

const Ground = () => {


    return (
        <Flex
        direction="column"
        mb={10}
        >


            <Flex
            mt={["5%", "8%"]}
            direction={["column", "row"]}
            px={[4]}
            py={[10]}
            // maxHeight={["100vh"]}
            
            >
                <Box mb={[10, 0]}>
                <Heading as="h3" fontSize={["2em", "3em"]} color="#016056">Let's Help You Hit The Ground Running</Heading>
                <Text opacity="0.5" my={[10]}>
                Paired with our 24/7/365 customer support, we provide you with tips, guides, and updates on new features to ensure every question you may ever have is answered
                </Text>
                {/* <Image src="https://res.cloudinary.com/sophire/image/upload/v1637353751/Personal/fff-bbb/hub_eoisjf.webp"/> */}
                </Box>

                <Box ml={[0, "15%"]} >
                    <video width="90%" src="https://res.cloudinary.com/sophire/video/upload/v1637353768/Personal/fff-bbb/night_mmpx9u.mp4" />
                </Box>

            </Flex>



        </Flex>
    )
}

export default Ground;
